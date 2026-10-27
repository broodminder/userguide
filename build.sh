#!/bin/bash
# This file shall be saved in VisualStudio Code with an LF end of line sequence
# Production CD (unchanged): sudo /bin/sh build.sh → mkdocs build → /var/www/html/doc
# When invoked as sh, re-exec under bash (needed for [[ ]], set -a, disown).

if [ -z "${BASH_VERSION:-}" ]; then
  exec /bin/bash "$0" "$@"
fi

set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

# Capture real login user BEFORE sourcing .env ( .env often sets USER=… )
INVOKING_USER="${SUDO_USER:-$USER}"
UG_BIN="/home/${INVOKING_USER}/.pyenv/versions/userguide/bin"

if [[ ! -x "${UG_BIN}/mkdocs" ]]; then
  echo "ERROR: mkdocs not found at ${UG_BIN}/mkdocs (INVOKING_USER=${INVOKING_USER})" >&2
  exit 1
fi

# Load .env (do NOT use export $(grep|xargs) — breaks on quotes/JWT)
if [[ ! -f "$ROOT/.env" ]]; then
  echo "ERROR: missing $ROOT/.env" >&2
  exit 1
fi
set -a
# shellcheck disable=SC1091
# Use '.' not 'source' for clarity; we already require bash
. "$ROOT/.env"
set +a

export PATH="${UG_BIN}:$PATH"
echo "ENABLE_DOC_ASSISTANT=${ENABLE_DOC_ASSISTANT:-<unset>} (0=classic search, 1=Ask BroodMinder)"
echo "Using toolchain: ${UG_BIN}"

# Translation management
echo "Get differrence between the two last commit"
git diff HEAD^ HEAD --name-only > filesChange.txt

echo "Translate files"
"${UG_BIN}/python" userguide_utilities/translateFiles.py

# Build (static HTML — Apache serves after copy; !ENV resolved HERE)
echo "build DOCUMENTATION"
export BUILD_ONLY_LOCALE=null
export ENABLE_PDF_EXPORT=0
"${UG_BIN}/mkdocs" build --clean

# Sanity-check home: markup + JS flag (doc-chat.js upgrades search→Ask if ENABLED defaults wrong)
ASK_FLAG="${ENABLE_DOC_ASSISTANT:-0}"
if [[ "$ASK_FLAG" == "0" || "$ASK_FLAG" == "false" || "$ASK_FLAG" == "no" || "$ASK_FLAG" == "off" ]]; then
  if ! grep -q 'id="search-form"' ./site/index.html; then
    echo "ERROR: ENABLE_DOC_ASSISTANT=$ASK_FLAG but site/index.html has no #search-form" >&2
    exit 1
  fi
  if grep -q 'id="ask-broodminder-home"' ./site/index.html; then
    echo "ERROR: Ask markup present while ENABLE_DOC_ASSISTANT=$ASK_FLAG" >&2
    exit 1
  fi
  if ! grep -qE 'DOC_ASSISTANT_ENABLED = (0|"0"|false);' ./site/index.html; then
    echo "ERROR: DOC_ASSISTANT_ENABLED must be off in site/index.html (got):" >&2
    grep -oE 'DOC_ASSISTANT_ENABLED = [^;]+;' ./site/index.html | head -5 >&2 || echo "(missing)" >&2
    exit 1
  fi
  echo "OK: classic search + DOC_ASSISTANT_ENABLED off"
else
  if ! grep -q 'ask-broodminder-home' ./site/index.html; then
    echo "ERROR: ENABLE_DOC_ASSISTANT=$ASK_FLAG but site/index.html has no Ask widget" >&2
    exit 1
  fi
  echo "OK: Ask BroodMinder baked into site/index.html"
fi

# Installation
echo "install for apache"
rm -Rrf /var/www/html/doc/*
cp -r ./site/* /var/www/html/doc/

# Build PDF in background (async) — bash only (disown)
echo "build EN PDF (background)"
(
    export BUILD_ONLY_LOCALE=en
    export ENABLE_PDF_EXPORT=1
    "${UG_BIN}/mkdocs" build --clean
    mkdir -p /var/www/html/doc/assets/pdf/
    cp ./site/assets/pdf/userguide.pdf /var/www/html/doc/assets/pdf/userguide.pdf
    rm -r ./site
) > /tmp/pdf_build.log 2>&1 &
disown || true

echo " "
echo "done"
ls -l /var/www/html/doc/

echo "Doc is deployed"

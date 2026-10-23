#!/bin/bash
# This file shall be saved in VisualStudio Code with an LF end of line sequence

# Load .env (xargs breaks on quotes/JWT — use source)
set -a
# shellcheck disable=SC1091
source "$(cd "$(dirname "$0")" && pwd)/.env"
set +a
export PATH=/home/$USER/.pyenv/versions/userguide/bin/:$PATH
echo "ENABLE_DOC_ASSISTANT=${ENABLE_DOC_ASSISTANT:-<unset>} (0=classic search, 1=Ask BroodMinder)"

# Translation management
echo "Get differrence between the two last commit"
git diff HEAD^ HEAD --name-only > filesChange.txt

echo "Translate files"
/home/$USER/.pyenv/versions/userguide/bin/python userguide_utilities/translateFiles.py

# Build (static HTML — Apache serves ./site after copy; !ENV is resolved HERE, not at request time)
echo "build DOCUMENTATION"
export BUILD_ONLY_LOCALE=null && export ENABLE_PDF_EXPORT=0 && /home/$USER/.pyenv/versions/userguide/bin/mkdocs build --clean

# Sanity-check home page was baked with the intended assistant flag
ASK_FLAG="${ENABLE_DOC_ASSISTANT:-0}"
if [[ "$ASK_FLAG" == "0" || "$ASK_FLAG" == "false" || "$ASK_FLAG" == "no" || "$ASK_FLAG" == "off" ]]; then
  if ! grep -q 'id="search-form"' ./site/index.html; then
    echo "ERROR: ENABLE_DOC_ASSISTANT=$ASK_FLAG but site/index.html has no #search-form (Ask UI leaked into static build)" >&2
    exit 1
  fi
  echo "OK: classic search baked into site/index.html"
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

# Build PDF in background (async)
echo "build EN PDF (background)"
(
    export BUILD_ONLY_LOCALE=en && export ENABLE_PDF_EXPORT=1 && /home/$USER/.pyenv/versions/userguide/bin/mkdocs build --clean
    mkdir -p /var/www/html/doc/assets/pdf/
    cp ./site/assets/pdf/userguide.pdf /var/www/html/doc/assets/pdf/userguide.pdf
    rm -r ./site
) > /tmp/pdf_build.log 2>&1 &
disown

echo " "
echo "done"
ls -l  /var/www/html/doc/

echo "Doc is deployed"        

#!/bin/bash
# Local EN + FR deploy — same idea as build.sh but WITHOUT translation / PDF.
# Uses mkdocs_test.yml (light config: en + fr only), as documented in the README.
#
# Usage:
#   ./build_local.sh              # build + deploy to Apache /var/www/html/doc
#   SKIP_DEPLOY=1 ./build_local.sh
#   # or just serve:
#   unset ENABLE_PDF_EXPORT
#   mkdocs serve -f mkdocs_test.yml

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

MKDOCS="${MKDOCS:-/home/${USER}/.pyenv/versions/userguide/bin/mkdocs}"
DEST="${DOC_DEST:-/var/www/html/doc}"
CONFIG="${MKDOCS_CONFIG:-mkdocs_test.yml}"

if [[ ! -x "$MKDOCS" ]]; then
  echo "mkdocs not found at: $MKDOCS" >&2
  exit 1
fi

if [[ ! -f "$CONFIG" ]]; then
  echo "Config not found: $CONFIG" >&2
  exit 1
fi

export ENABLE_PDF_EXPORT=0
# Do not force BUILD_ONLY_LOCALE — mkdocs_test.yml lists only en + fr

echo "Building with $CONFIG (EN + FR, no translation)..."
"$MKDOCS" build -f "$CONFIG" --clean

if [[ "${SKIP_DEPLOY:-0}" == "1" ]]; then
  echo "Build done (SKIP_DEPLOY=1). Site is in ./site/"
  echo "  Serve: mkdocs serve -f $CONFIG"
  echo "  Or deploy: sudo rm -rf ${DEST:?}/* && sudo cp -a ./site/. ${DEST}/"
  exit 0
fi

echo "Deploying to $DEST (sudo) ..."
sudo mkdir -p "$DEST"
sudo rm -rf "${DEST:?}/"*
sudo cp -a ./site/. "$DEST/"

echo ""
echo "Done."
echo "  EN: http://127.0.0.1/doc/"
echo "  FR: http://127.0.0.1/doc/fr/"

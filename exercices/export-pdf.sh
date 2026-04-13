#!/bin/bash
# Export all exercise Markdown files to PDF via pandoc + xelatex
# Usage: ./exercices/export-pdf.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR/pdf"

mkdir -p "$OUTPUT_DIR"

for md in "$SCRIPT_DIR"/*.md; do
  [ "$(basename "$md")" = "README.md" ] && continue
  filename=$(basename "$md" .md)
  echo "Export: $filename.md → pdf/$filename.pdf"
  pandoc "$md" \
    -o "$OUTPUT_DIR/$filename.pdf" \
    --pdf-engine=xelatex \
    --resource-path="$SCRIPT_DIR" \
    -H "$SCRIPT_DIR/techtown-template.tex" \
    -V geometry:"margin=2.5cm,top=3.5cm,headsep=1.2cm,headheight=1cm" \
    -V fontsize=11pt \
    -V mainfont="Helvetica Neue" \
    -V monofont="Menlo" \
    -V documentclass=article
done

echo "All PDFs are in: $OUTPUT_DIR/"

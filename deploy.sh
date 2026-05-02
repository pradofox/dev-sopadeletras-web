#!/usr/bin/env bash
# Deploy de dev-sopadeletras-web a Cloudflare Workers
# Uso: ./deploy.sh
set -e
cd "$(dirname "$0")"

echo "→ build limpio..."
rm -rf dist .astro
npm run build

echo ""
echo "→ deployando a Cloudflare..."
npx wrangler deploy --config dist/_worker.js/wrangler.json 2>/dev/null \
  || npx wrangler deploy --config dist/server/wrangler.json 2>/dev/null \
  || npx wrangler deploy

echo ""
echo "✓ live en https://dev.sopadeletras.art"

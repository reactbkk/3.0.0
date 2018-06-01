set -eo pipefail
yarn build
rm -rf .netlify/dist
mkdir -p .netlify/dist
cp -r dist .netlify/dist/3.0.0
cat > .netlify/dist/__redirects <<'EOF'
/ /3.0.0/
EOF

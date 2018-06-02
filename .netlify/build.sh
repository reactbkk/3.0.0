set -eo pipefail

echo "Review ID: $REVIEW_ID"

if [ "$REVIEW_ID" ]
then
yarn build
rm -rf .netlify/dist
mkdir -p .netlify/dist
cp -r public .netlify/dist/3.0.0
cat > .netlify/dist/_redirects <<'EOF'
/ /3.0.0/
EOF
else
rm -rf .netlify/dist
mkdir -p .netlify/dist
cat > .netlify/dist/_redirects <<'EOF'
/ https://reactbkk.com/3.0.0/
EOF
fi

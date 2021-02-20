#! /bin/bash
#! git push --force --quiet "https://${GITHUB_TOKEN}@github.com/[user]/[repository name].git" master:gh-pages
rm -rf build
yarn build

cd build
git init
git add .
git commit -m 'Travis build'
git push --force --quiet master:gh-pages
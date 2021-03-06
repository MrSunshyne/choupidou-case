#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:MrSunshyne/choupidou-case.git master:gh-pages

cd -

git add -A
git commit -m "updated docs"
git push
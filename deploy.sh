rm -rf dist &&
yarn build &&
cd dist
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:lLeahDizon/lemon-ui-vue3-website.git &&
git push -f -u origin main &&
cd -
echo https://lleahdizon.github.io/lemon-ui-vue3-website/index.html

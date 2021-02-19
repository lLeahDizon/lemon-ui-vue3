rm -rf dist &&
yarn build &&
cd dist
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@gitee.com:LeahDizon/lemon-ui-vue3-website.git &&
git push -f -u origin main &&
cd -
echo https://leahdizon.gitee.io/lemon-ui-vue3-website/#/

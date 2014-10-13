set -x trace
cd ..
harp compile _harp www
cp -r www/* ./
rm -rf www
cd -

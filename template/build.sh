#!/bin/sh

tsc -p tsconfig.build.json

mkdir -p sample/node_modules/HelloWorld

cp -R assets sample/node_modules/HelloWorld
cp -R lib sample/node_modules/HelloWorld
cp package.json sample/node_modules/HelloWorld

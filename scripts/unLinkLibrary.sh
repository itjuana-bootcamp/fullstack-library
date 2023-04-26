#!/bin/bash

client=$1

if [ -n "$1" ]; then
	echo "unlinking $client"
else
	echo "client not supplied"
	exit 1
fi

node ./scripts/changeMain.js lib

cd ../${client}

npm unlink fullstack-library

cd ../fullstack-library

npm unlink ../${client}/node_modules/react

cd ../${client}

# npm i fullstack-library@latest
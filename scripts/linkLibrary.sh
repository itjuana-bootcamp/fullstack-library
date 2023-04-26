#!/bin/bash

client=$1

if [ -n "$1" ]; then
	echo "Linking to $client"
else
	echo "client not supplied"
	exit 1
fi

node ./scripts/changeMain.js src # This script changes the `main` route of `package.json` to src/...

npm i

npm run build  # build the library

npm link # creates link

cd ../${client} # goes to client app

rm -rf node_modules

npm i

npm link fullstack-library # links the library

cd ../fullstack-library

npm link ../${client}/node_modules/react
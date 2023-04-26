// Used to change main property in package.json when using linkLibrary script. To be able to link and see the changes only by saving them.

const fs = require('fs')

function changeMain() {
	const config = require('../package.json')
	const args = process.argv.slice(2)

	if (args[0] === 'src')
		config.main = 'src/index.js'
	else
		config.main = 'lib/index.js'

	fs.writeFile('./package.json', JSON.stringify(config, null, 2) + '\n', err => {
		if (err) {
				console.log('Error writing file', err)
		} else {
				console.log('Successfully updated main')
		}
	})
}

changeMain()
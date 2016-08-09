// const amanda = require('./amanda.js');
// const sphereVolume = require('./tyler.js');
// const debug = require('debug')('main');
// const debug = require('./tyler.js')('one');

// console.log(amanda.geometricSum(1, 2, 5));
// console.log(sphereVolume(2));
// debug("starting");

// debug('start first debugger!');

const fs = require('fs');
// fs.writeFile('hello.txt', 'hello from Node!', function(err) {
// 	if (err) return console.log('Error writting to file.');
// });

fs.readFile('hello.txt', {encoding: 'utf8'}, function(err, data) {
	if (err) return console.log('Error reading to file.');
	console.log('Read file contents:');
	console.log(data);
});
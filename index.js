#! /usr/bin/env node

const fs = require('fs');
const ncp = require("ncp").ncp
const pathToModule = require.resolve('module')
var path = require("path");



ncp(__dirname + '/frontend-files/', '', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});

// fs.createReadStream(__dirname + '/frontend-files').pipe(fs.createWriteStream('/'));


// fs.stat(process.argv[1] + '/frontend-files', function(err, fileStat) {
//     if (err) {
//         if (err.code == 'ENOENT') {
//             console.log('Does not exist.');
//         }
//     } else {
//         if (fileStat.isFile()) {
//             console.log('File found.');
//         } else if (fileStat.isDirectory()) {
//             console.log('Directory found.');
//         }
//     }
// });


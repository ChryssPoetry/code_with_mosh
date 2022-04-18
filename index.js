

const logger =require('./logger');

console.log(logger)
logger("message");
// modules in node
//console.log(__filename)
//console.log(__dirname)

// the path module

const path = require('path') //loading the path module
//using the parse method

console.log(path.parse(__filename));
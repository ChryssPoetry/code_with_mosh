

const logger =require('./logger');

console.log(logger)
logger("message");
// modules in node
//console.log(__filename)
//console.log(__dirname)

// the path module

const path = require('path') //loading the path module
//using the parse method

console.log(path.parse(__filename)); // to get information about a file
//getting information about the operating system

const os = require('os');

// using a template string to print out

const total_memory = os.totalmem().toFixed(2);
const free_memory = os.freemem().toFixed(2);

console.log(`total memory: ${total_memory}`);
console.log(`free memory: ${free_memory}`);

// working with file;
//using fs module 

const fs = require('fs')
// the methods comes in async and synchronous
//using the synch
//const files = fs.readFileSync('./')
//console.log(files)

// async takes a function for their second arguement

const files = fs.readdir('./', function(err, files){
    if (files){
        console.log(`files: ${files}`)
    }
    else {
        console.log(`error: ${err}`)
    };
});

//event module, we'd be using eventEmitter
const EvenEmitter = require('events');
// in other to use, there be need to make a new instance of the class

const emitter =  new EvenEmitter();

emitter.addListener('messageLogged', (arg)=>{
    console.log(" listener called ", arg)

})

//raising an event, before using the event; the event has to e registered
emitter.emit('messageLogged', {id:1, url:"http://", name: "chrysspoetry"});
// when raising an events, there be need to parse data as arguements

emitter.on("logging", (arg)=>{
    console.log("you are logged in", arg)
})

emitter.emit("logging", {id:2, name:"franklin", server_port: "8080"})
// the real world way to do it, extending the eventemitter


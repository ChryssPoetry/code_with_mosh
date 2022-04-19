const http = require('http'); // for building networking apps
const server = http.createServer((req, res)=>{
    if(req.url === "https://"){
        res.write("hello word")
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end();
    }
})

//create server has the same ability as an event listener

//server.on('connection', socket => {
    //console.log("new connection")
//}) very low level thingy, we pass a call back event to the create server

server.listen(3000)
console.log("server is listening at port 3000... ")

// NPM, node package manager series
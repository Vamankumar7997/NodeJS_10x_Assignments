const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) =>{
    fs.readFile("index.html",{encoding: "utf-8"},(err,data)=>{
        res.end(data);
    })
})
server.listen(3000, ()=> console.log("server is listening"))
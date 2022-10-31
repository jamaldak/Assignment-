const http = required('http');


const Server= http.createServer(function(res,req){
//headeer
res.writeHead(200,{'Content-Type':'text/plain'})

res.end("Server Created")

})

Server.listen(400,"127.0.0.1")
console.log("Server have been Created")
var servidor = require ('http');
var archivos = require('fs');

servidor.createServer(function(req,res){
    archivos.readfile('inicio.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data)
        res.end("")
    })
    
    
}).listen(80)
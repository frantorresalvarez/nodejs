var servidor = require ('http');
var ruta = require('url');
var procesador = require('querystring');
var archivos = require('fs');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    
        
        switch(req.url){
        case "/":
                
            archivos.readFile('front.html',function(err,data){
            res.end(data)
            });    
                
            console.log("principal");
            break;
        case "/recibe":
            console.log("recibe");
            break;
        case "/envia":
           console.log("envia");
            break;    
            
    }

}).listen(8000)
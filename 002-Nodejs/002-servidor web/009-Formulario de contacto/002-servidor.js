var servidor = require ('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring')


servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var rutacompleta = ruta.parse(req.url,true)
    switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
        
            res.write(data)
            res.end("")
            });
            break;
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
        
            res.write(data)
            res.end("")
            });
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
        
            res.write(data)
            res.end("")
            });
            break;
            
        case "/procesa":
            let datos = '';
            req.on('data',parte=>{
                datos += parte.toString();
            })
            req.on('end',()=>{
                var cadena = datos
                var procesado = procesador.parse(cadena)
                console.log(procesado)
            })
            res.end("")
            break;
            
        default:
            res.end("Pagina no encontrada");
            break;
    }
    if(req.url != "/favicon.ico"){
        var fecha = new Date();
        
        archivos.appendFile("registro.txt",fecha.getSeconds()+","+fecha.getMinutes()+","+fecha.getHours()+","+fecha.getDate()+","+fecha.getMonth()+","+fecha.getFullYear()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.seal+","+req.url+"\n",function(err){
        if(err) throw err;
});
    }
    
}).listen(80)
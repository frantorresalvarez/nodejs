var servidor = require ('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring');
var mysql = require('mysql');
//npm install mysql
var mongoose = require('mongoose');

const formularioSchema = new mongoose.Schema({
    nombre:String,asunto:String,mensaje:String,email:String
})

const formulario = mongoose.model("formulario",formularioSchema)


const conexionmongoose = 'mongodb://127.0.0.1/contacto';

mongoose.connect(conexionmongoose,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("Conectado a mongo")
   
})


var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
});

conexion.connect(function(err){
                if(err) throw err;
                console.log("conectado")
});

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var rutacompleta = ruta.parse(req.url,true)
    
    archivos.readFile('plantillas/cabecera.html',function(err,data){
        
            res.write(data)
        
        switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
            res.write(data)
            });
            break;
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
            res.write(data)
            });
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
            res.write(data)
            });
            break;
        case "/blog":
                conexion.query(`SELECT * FROM entradas `,
                    function(err,result,fields){
                    if(err) throw err;
                    console.log(result)
                    for(let i = 0;i<result.length;i++){
                        console.log(result[i])
                        res.write(`
                            <article>
                                <h4>`+result[i].titulo+`</h4>
                                <time>`+result[i].fecha+`</time>
                                <p>`+result[i].texto+`</p>
                            </article>
                            
                       ` )
                        
                    }
                })
            

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
                var nnombre = procesado.nombre
                var nasunto = procesado.asunto
                var nemail = procesado.email
                var nmensaje = procesado.mensaje
                
                var nuevoFormulario = new formulario({
                    nombre:nnombre,
                    asunto:nasunto,
                    email:nemail,
                    mensaje:nmensaje
                })

                
                
                nuevoFormulario.save()
                    .then(function(){
                        console.log("insertado")
                    })

            })
           
            break;
            
        default:
            res.end("Pagina no encontrada");
            break;
    }
        
      archivos.readFile('plantillas/piedepagina.html',function(err,data){
        
            res.write(data)
            res.end("")
            });   
        
        
        
            });
    
    
    
   
    
    
    if(req.url != "/favicon.ico"){
        var fecha = new Date();
        archivos.appendFile("registro.txt",fecha.getSeconds()+","+fecha.getMinutes()+","+fecha.getHours()+","+fecha.getDate()+","+fecha.getMonth()+","+fecha.getFullYear()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.seal+","+req.url+"\n",function(err){
        if(err) throw err;
});
    }
    
}).listen(8000)
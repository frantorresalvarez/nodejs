var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/contacto';

const formularioSchema = new mongoose.Schema({
    nombre:String,asunto:String,mensaje:String,fecha:String
})

const formulario = mongoose.model("formulario",formularioSchema)
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("Conectadoa mongo")
})
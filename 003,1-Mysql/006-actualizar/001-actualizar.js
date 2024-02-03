
var mysql = require('mysql')
//npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
});


conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`UPDATE entradas SET titulo = 'Titulo Modificado' WHERE id = 1 `,
        function(err,result){
        if(err) throw err;
        console.log("actualizado")
    })
})
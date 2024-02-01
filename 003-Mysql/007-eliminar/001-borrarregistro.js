
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
    conexion.query(`DELETE FROM entradas WHERE id = 2 `,
        function(err,result){
        if(err) throw err;
        console.log("Eliminado el registro")
    })
})
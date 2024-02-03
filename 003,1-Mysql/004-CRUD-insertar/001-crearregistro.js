
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
    conexion.query(`INSERT INTO entradas VALUES(
            NULL,
            'Titulo de la entrada',
            'Texto de la entrada',
            '2023-08-14'

            ) `,
        function(err,result){
        if(err) throw err;
        console.log("registro insertado")
    })
})
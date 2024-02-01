var archivos = require('fs');
archivos.writeFile("nuevo.txt","Este es mi contenido 2",function(err){
    if(err) throw err;
    console.log("Mision cumplida")
});
function saluda(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo "+nombre+".\n";
    cadena += "Tengo "+edad+" años\n";
    cadena += "Mi correo es: "+email+"\n";  
    return cadena;
}



console.log(saluda("Jose Vicente",45,"jose@info.com"));
console.log(saluda("Juan",47,"juan@info.com"));
console.log(saluda("Jorge",43,"jorge@info.com"));

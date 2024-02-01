var agenda = [];
agenda[0] = "Jose Vicente";
console.table(agenda);
agenda[1] = "Juan";
console.table(agenda);
agenda[2] = "Jorge";
console.table(agenda);
agenda.push("Julia");
console.table(agenda);
agenda.pop();// quita el último elemento dle indice
console.table(agenda);
agenda.splice(0,1);// Elimina el registro de [0]
console.table(agenda);
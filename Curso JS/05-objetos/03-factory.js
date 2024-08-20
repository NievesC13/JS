/**
 * 
 * Creador de objs para mas facil uso si tienen las mismas propiedad
 * 
 */

function crearUsuario(name, email) { //funcion para crear el objeto
    return {
        email, // al ser igual la variable al nombre de la propiedad, no hace falta asignar.
        name,
        activo: true, // valor boolean
        recuperarClave: function () { // funcion
            console.log("Recuperando clave"); 
        }, //Funcion anonima
    }; 
}

let user1 = crearUsuario('Cesar', 'nievescesar87gmail.com');
let user2 = crearUsuario('Miguel', 'miguelgil@gmail.com');

console.log(user1);
console.log(user2);
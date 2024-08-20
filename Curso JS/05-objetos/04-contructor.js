/**
 * funciiones contructoras UpperCamelCase
 */

//{id : 1, recuperarClave: funcion(){}}

function Usuario(){
    this.id = 1; //"this" para crear propiedad para los objetos. 
    this.recuperarClave = function(){ // Ahora es un metodo, es una funcion asiganda a un objeto
        console.log('Recuperando clave...');
    }
} // si no tiene nada que retorna, con el "new" retorna el "this"

let usuario = new Usuario(); // Con New se le asigna los valores de "Usuarios()" a "usuario"
console.log(usuario); 

const user = { id: 1 }; /**Cuando es const, no se puede cambiar el valor
pero si puede agregar y quitar propiedades si cuando son obj y arrays */

user.name = 'Cesar'; 
user.guardar = function(){
    console.log('Guardando', user.name); 
}

user.guardar(); 

delete user.name;
delete user.guardar;

console.log(user);

// const user1 = Object.freeze({ id: 1 });//para que no puede ser modificado de ningunga manera
const user1 = Object.seal({ id: 1 });//Para que se le pueda moficar sus parametros pero no agregar ni quitar
user1.name = 'Cesar'; 
user1.id = 2; 
console.log(user1);
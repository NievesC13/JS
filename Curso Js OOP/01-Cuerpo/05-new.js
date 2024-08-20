function Person(){
    /**
     * Hace que se tenga que usar el new para que se le 
     * asigne las propiedades al objeto correcto
     */
    "use strict";
    this.name = ''
    this.lastName = ''
} 

// new asigan los parametros que el constructor tiene al nuevo objeto
const person = new Person(); 
console.log(person)
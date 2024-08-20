/**
 *  function Person(name, lastname){
    *  'use strict'
        this.name = name; 
        this.lastname = lastname;
        this.displayName = function(){
        return `${this.name} ${this.lastname}`
    } 
}
 */


//es una forma de escribi una funcion 
class Person {
    //Para asignar necesita un metodo constructor
    constructor(name, lastname){ //metodo que devuelve propiedades
        this.name = name;
        this.lastname = lastname; 
        //No devolver objetos ya que sobre escribe y no agrega las propiedades
    }
    greet(){
        return `Hello i'm ${this.name} ${this.lastname}`
    }
}// Las clases es un conjunto de metodos 
    //Las clases siempre hay que inicializarlas primero
        // A diferencia de las funciones

const user = new Person('Jow', 'Gonzales')
const user1 = new Person('jose', 'Gonzales')

console.log(user.greet()); 
console.log(user1.greet()); 
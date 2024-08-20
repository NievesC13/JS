//Un objeto hereda propiedades de otro

// function Person () {
//     this.name = '',
//     this.lastname = ''
// }

// function Programmer() { 
//     this.languaje = ''
// }

// Con prototype a;adimos las propiedades de un constructor a otro 
// y asi hereda sus propiedades
// Programmer.prototype = new Person(); 

// console.log(Person);
// console.log(Programmer);

// const programador = new Programmer(); 
// programador.name = 'Cesar';
// programador.lastname = 'Nieves'; 
// programador.languaje = 'Js'


// console.log(programador);

/**
 * 
 * Esto es algo propio de JS con el prototype, ahora a hacerlo con las class para el resto de lenguajes
*/


class Person {
    constructor(name, lastname, age) {
        this.name = name
        this.lastname = lastname
        this.age = age ;
    }
}

//Se utiliza la extends que hace que herede las propiedades del 
//objeto al que se referencia
class Programmer extends Person {
    constructor(name, lastname, age, language){
        super(name, lastname, age);//Es el que hace la llamada al objeto que hereda
        this.language = language; 
    }
}

const persona = new Person('Maria', 'Josefina', 25); 
console.log(persona); 

const programador = new Programmer('John', 'Snow', 75, 'JS'); 
console.log(programador); 

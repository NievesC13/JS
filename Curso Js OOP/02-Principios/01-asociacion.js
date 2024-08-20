//es una forma de escribi una funcion 
class Person {
    //Para asignar necesita un metodo constructor
    constructor(name, lastname){ //metodo que devuelve propiedades
        this.name = name;
        this.lastname = lastname; 
    }
}

const john = new Person('John', 'Snow')
const maria = new Person('Maria', 'Snow')

// Asociacion, relacionar que dos objetos tengan algo en comun
maria.parent = john; //Si esta asociacion se quita, no afecta en nada a los objeto principales


console.log(maria);
console.log(john);
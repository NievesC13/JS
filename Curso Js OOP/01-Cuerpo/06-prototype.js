function Person(name, lastname){
    this.name = name; 
    this.lastname = lastname;
    this.displayName = function(){
        return `${this.name} ${this.lastname}`
    } 
}

//Creamos objetos y mostramos en pantalla una de sus propiedades

const john = new Person('John', 'Nieves'); 
console.log(john.displayName()); 

const mario = new Person('Mario', 'Guilles'); 
console.log(mario.displayName()); 

const maria = new Person('Maria', 'Perez'); 
console.log(maria.displayName()); 

const jose = new Person('Jose', 'Perez'); 
console.log(jose.displayName()); 


// Prototype crea el nuevo metodo en constructor
Person.prototype.greet = function() { 
    console.log("Hola soy " + this.name)
}

Person.prototype.age = 100; 

// De esta manera el nuevo metodo 
//no esta en los objetos creados en base al constructor
console.log(john); 
console.log(mario); 
console.log(maria); 
console.log(jose); 

//Pero al no encontrarlo en el objeto, 
//hace referencia al constructor y como si lo tiene
// lo muestra
console.log(john.age); 
console.log(mario.greet()); 
console.log(maria.greet()); 
console.log(jose.greet()); 

// nuevo objeto

const s = new String('Hellow world');
String.prototype.concatTest = function(){ // Se puede alterar constructores ya predeterminados
    return this + ' Test';
}

//Metodos de java
//Para convertir en mayusculas
let cadena = 'Hola a Todos'; // al cadena ser un string esta enlazado con el constructor 
//de objeto string y por eso se puede usar el metodo que asignamos al constructor String en el
console.log(cadena);
console.log(cadena.concatTest());

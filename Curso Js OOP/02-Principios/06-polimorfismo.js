/**
 * Caracteristicas :
 *      Sobrecarga: Un metodo que procesa distintos tipos de datos sin problema
 *      Polimorfismo Parametrico: Metodo que funcione conn parametros de cualquier tipo
 *      Polimorfismo de Subtipo: tambien con distinto tipo de dato y por herencia
 */

//Sobrecarga
console.log("SOBRE CARGA")    

console.log(countItems('Hola mundo'))
console.log(countItems(100))   

function countItems(x){
    return x.toString().length; 
}

console.log(sum(10, 20))    
console.log(sum(10, 20, 20))    

function sum(x = 0, y = 0, z = 0) { //Para que se puedan ingresar distintos parametros, se le puede asignar 0
    return x + y + z; 
}

// Polimorfismo Parametrico
console.log("Polimorfismo Parametrico".toUpperCase())    


function Stack() { 
    this.item = [] // Aqui puede ingresar cualquier tipo de dato 
    this.push = function(item){
        this.item.push(item); 
    }
}

const stack = new Stack() 
stack.push(1307); 
const stack1 = new Stack() 
stack1.push('Hola'); 
const stack2 = new Stack() 
stack2.push(['hellow', 2]); 

console.log(stack)
console.log(stack1)
console.log(stack2)

console.log("Polimorfismo de Subtipos".toUpperCase());


class Person {
    constructor(name, lastname) {
        this.name = name; 
        this.lastname = lastname; 
    }
}

class Programmer extends Person{
    constructor(name, lastname, language){
        super(name, lastname)
        this.language = language; 
    }
}

const john = new Person('John', 'Snow')
const cesar = new Programmer('Cesar', 'Nieves', 'Js')

console.log(john)
console.log(cesar)

writeFullName(john)
writeFullName(cesar)

function writeFullName(obj) {
    console.log(obj.name + " " + obj.lastname); 
}
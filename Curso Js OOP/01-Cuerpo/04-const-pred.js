const person = new Object(); //constructor predeterminado de js 
const string = new Object('Hello'); 

string.name = 'Especial'; 
string.test = function(){
    return this + ' ' + 'Test'; 
}


console.log(string.test() + ' ' + string.name);

const user = { 
    name: 'Cesar', 
    lastName: 'Nieves',
    age: 23, 
    showName(){
        return `${this.name} + ${this.lastName}`; 
    }, 
}

//Metodos del objeto Object
console.log(Object.keys(user)); // Object.Key devuelve un arreglo de las propiedades del objeto
console.log(Object.values(user)); // Object.values devuelve el valor de las propiedades
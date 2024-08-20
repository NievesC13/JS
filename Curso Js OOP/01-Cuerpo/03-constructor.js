const user = {
    name: 'Cesar', 
    lastName: 'Nieves', 
    age: 23,  
    showFullName(){
        //return this.name + ' ' + this.lastName; 
        return `${this.name} ${this.lastName}`
    }
}

console.log(user.showFullName()); 

//Constructores predeterminados

function Person(){
    this.name = '',
    this.lastName = '', 
    this.age = 0, 
    this.showFullName = function(){
        return `${this.name} ${this.lastName}`
    }
}
// New para usar el constructor y aplicarle los parametros al nuevo objeto
const user2 = new Person()
//Se le agregan los parametros que se le asignaron
user2.name = 'Miguel';
user2.age = 26;
user2.lastName = 'Gil'

console.log(user2.showFullName()); 
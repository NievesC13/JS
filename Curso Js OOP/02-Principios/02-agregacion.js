
//Es una asociacion de dos objetos o mas pero con roles mayores a otros

const company = {
    name: 'FastTech', 
    empleyees: [], 
}

class Person {
    constructor(name, lastname){ 
        this.name = name;
        this.lastname = lastname; 
    }
}

const john = new Person('John', 'Snow')
const maria = new Person('Maria', 'Snow')

company.empleyees.push(john);
company.empleyees.push(maria);

console.log(maria);
console.log(john);
console.log(company);
/**
 * Concentrar datos y funcionalidad sin que se muestre
 * Para que el objeto sea facil de usar 
 */

function Company(name){
    let empleyees = [] // Propiedad del constructor, pero que no se a;ade al objeto nuevo 
    this.name = name 

    this.getEmployees= function() {
        return empleyees
    }

    this.addEmployees = function(employee) { // se va a ingresar el propiedad del empleado
        empleyees.push(employee)                // Esta puede ser cualquier tipo de proiedad (string, array, list, objs)
    }

}

const company = new Company('Coca Cola'); 
const company1 = new Company('Pepsi'); 

console.log(company); 
console.log(company1); 

company.addEmployees({name : 'Jose'});
company1.addEmployees({name : 'Maria'});

console.log(company.getEmployees()); 
console.log(company1.getEmployees()); 

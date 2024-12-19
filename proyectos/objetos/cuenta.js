/**
 * Construye una clase usando function para implementar una cuenta de efectivo. 
 * Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). 
 * El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. 
 * No se puede sacar más de lo que exista en el saldo. 
 * 
 * A los métodos los invocaremos con las llamadas ingresar(1000) 
 * o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900..
 */

cuenta = function ( nombreTitular, saldo ){ 
    this.titular = nombreTitular; 
    this.saldo = saldo;
    this.ingresar = function(ingreso) {
        return this.saldo += ingreso;   
    },
    this.retirar = function(retiro){
        if(this.saldo < retiro){ 
            return "Saldo insuficiente!!"; 
        }else return this.saldo -= retiro; 
    }
}

const miCuenta = new cuenta("Cesar", 1000); 
console.log(`Mi saldo actual es ${miCuenta.saldo}`) 

console.log(`Ingresamos 1000`);
miCuenta.ingresar(1000)
console.log(`Mi saldo actual es ${miCuenta.saldo}`) 

console.log(`Retiramos 1500`);
console.log(miCuenta.retirar(1500)) 
console.log(`Mi saldo actual es ${miCuenta.saldo}`) 

console.log(`Retiramos 1500`);
console.log(miCuenta.retirar(1500)) 
console.log(`Mi saldo actual es ${miCuenta.saldo}`) 

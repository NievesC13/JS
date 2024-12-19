/**
 *  Crea una clase que lamaremos Bus. Sus atributos serán:

    capacidad: número máximo de pasajeros
    pasajeros: número de pasajeros (inicialmente 0)
    conductor: objeto conductor.
    Sus métodos

    subir(pasajeros): aumenta el numero de pasajeros
    bajar(pasajaeros): disminuye el número de pasajeros
    conductor: asigna un objeto conductor.
    El ojeto conductor es de una clase (Conductor) cuyos atributos son:

    nombre: nombre del conductor
    licencia: un número que identifica al condcutor.
    Al crear el objeto se asigna también el conductor

    No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.
 * 
 *                              *****************************
 * 
 * El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

    Si se pide subir(25) , el atributo pasajeros valdrá 25.

    Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)

    Si pedimos bajar 45, el autobús se queda vacío.

    Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.

**/

class Conductor{
    constructor(name, license){
        this.name = name; 
        this.license = license ;
    }
}

class Bus{ 
    constructor(conductor, capacidad, pasajeros = 0){
        this.capacidad = capacidad; 
        this.pasajeros = pasajeros; 
        this.conductor = conductor; 
    }

    subir(pasajeros) {
        if(pasajeros + this.pasajeros > this.capacidad){  
            this.pasajeros = this.capacidad;
            return `Capacidad maxima alcanzada, ${this.capacidad} pasajeros.`
        }else{ 
            this.pasajeros += pasajeros
            return `Se subieron ${pasajeros} pasajeros al autobus`; 
        }

    }
    bajar(pasajeros) {
        if(pasajeros > this.pasajeros){
            this.pasajeros = 0;
            return `El autobus queda vacio, ${this,pasajeros} pasajeros`; 
        }else {
            this.pasajeros -= pasajeros
            return `Se bajaron ${pasajeros} pasajeros del autobus`
        }; 
    }
}

const jose = new Conductor("Jose", 12435); 
const linea1 = new Bus(jose, 40); 

console.log(linea1.subir(25));
console.log(linea1.subir(35));
//console.log(linea1.bajar(45));

console.log(linea1); 


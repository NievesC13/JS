/**
 * 
 * Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos 
 * por una persona en cada sesión de ejercicios. Las propiedades de la clase serán
*    nombre
*   sesiones
*   numsesioens

*   El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y 
numsesiones contiene el número de sesiones anotadas.

*   Tiene dos métodos:
*   anotar: anota los kilómetros
*   media: calcula la media de kilómetros recorridos

    Resultados: 
    Cada persona tendrá su ficha construída con esta clase.

    Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

    Si escribo media() devolverá 8 ((8+10+6)/3).

    En la solución se usa el camino má primitivo posible: arrays y bucles básicos

 */

class Ficha{
    constructor(nombre){
        this.nombre = nombre; 
        this.sesiones = [];  
        this.kmTotales = 0; 
        this.numSesiones = 0; 
    }

    anotar = function(kilometros) {
        this.sesiones[this.numSesiones] = kilometros; 
        this.numSesiones ++ ;
    }

    media = function(){ 
        let media = 0; 
        for( let i = 0; i = this.sesiones.length; i++ ){
            media += this.sesiones[i];
        }  
        return media / this.numSesiones 
    }
}

const cesarKm = new Ficha("Cesar")


cesarKm.anotar(8); 
cesarKm.anotar(10); 
cesarKm.anotar(16); 

console.log("Values of sessions: " + cesarKm.sesiones); 
console.log("Number of sessions: " + cesarKm.numSesiones); 
console.log("media of Km: " + cesarKm.media()); 

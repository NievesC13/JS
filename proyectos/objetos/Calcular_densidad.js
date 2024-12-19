/**
 * En esta propuesta debes crear una clase de nombre piedra (con class o con function) 
 * con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). 
 * Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.
 */

class calcularDensidad{
    constructor(masa, volumen){ 
        this.masa = masa; 
        this.volumen = volumen; 
    }
    densidad(){ 
        if(this.masa < this.volumen){
            return "Inserte valores correctos"; 
        }
        return (this.masa / this.volumen)
    }
}

const piedra = new calcularDensidad(194, 10); 
console.log(`Objeto piedra, volumen: ${piedra.volumen} cc, masa: ${piedara.masa} gr, densidad: ${piedra.densidad()}`); 
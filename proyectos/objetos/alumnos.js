/**
 * Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno. 
 * Cada objeto alumno se caracteriza por el nombre del alumno, su número de matrícula y su calificacion.

    El objeto tiene un método para poner la calificación: calificar(nota).

    Crea el script para implementar  un grupo de 4 alumnos.

    Por ejemplo un alumno de nombre "Juan", número de matrícula 124 y su nota la pondríamos como alumno.calificar(5) para ponerle un 5.

 */

let grupo = new Array(4); // hacemos un array a partir del objeto construcor de Array

class Alumno{ 
    constructor(nombre, numMatricula){ 
        this.nombre = nombre;
        this.numMatricula = numMatricula;
    }
    calificar(nota){
        this.calificacion = nota;         
    }
}
//array de objetos
grupo[0] = new Alumno("Albany", 124)
grupo[1] = new Alumno("Maria", 324);
grupo[2] = new Alumno("Alicia", 154);
grupo[3] = new Alumno("Pedro", 324);

grupo[0].calificar(5)
grupo[1].calificar(7)
grupo[2].calificar(6)
grupo[3].calificar(8)

console.log("El alumno " + grupo[0].nombre + " tiene una calificacion de " + grupo[0].calificacion); 
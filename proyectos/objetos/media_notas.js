let media = 0; 

let alumno = { 
    nombre: 'Jose', 
    materia: {
        ingles: 10, 
        programacion: 8, 
        HTML: 7, 
    }
}

media = (alumno.materia.ingles + alumno.materia.HTML + alumno.materia.programacion)/3; 

console.log(`La media del alumno ${alumno.nombre} es igual a ${media}`); 
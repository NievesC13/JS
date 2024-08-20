function suma(a, b){ // a es un parametro que sera ingresado para ser utilizado en la funcion
    console.log(arguments); // para checar todos los argumentos que entran en la funcon
    return a + b; 
}

let resultado = suma(5, 6, 4, 3, 5, 53);// Se le asigna un argumento a la funcion
console.log(resultado); 
console.log(typeof suma); 

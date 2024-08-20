/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, { name: "Chanchito"}],
];

let array = [{
    id : 1, 
    name : "Nicolas",
}, {
    id : 2, 
    name : "Felipe",
}, {
    id : 3, 
    name : "Chanchito",
}]; 

function toCollection(arr){
    let objs = []; 

    for (idx in arr) { // iteracion por los elementos del array
        let elemento = arr[idx]
        objs[idx] = elemento[1]; 
        objs[idx].id = elemento[0];  // se crea la propiedad de id que va a ser igual al primer elemento del array
    }

    return objs; 

}

let resultado =  toCollection(pairs); 
console.log(resultado);



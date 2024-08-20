// Cuales son los numeros pares

let i = 2;
// while(i < 2){ //primero evalua, luego ejecuta

//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }
// console.log('Fuera del while');

// Cuales son los numeros pares
do{ // primero ejecuta y luego evalua

    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}while(i < 2); 

console.log('Fuera del while');
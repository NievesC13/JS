/**
 * Crear loop que muestre numero que sean impares
 */

function impar(){
    for(let i = 1; i < 10; i ++){
        if (i % 2 !== 0){
            console.log('impar ' + i);
        }
    }

}

console.log(impar());
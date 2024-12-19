function esPrimo(numero){
    if (numero < 2){
        return false; 
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0 ){
            return false; 
        }
    }

    return true; 
}

for (let i = 1; i <= 100; i++){
    if(esPrimo(i)){
        console.log(i, 'Es primo'); 
    }else{
        console.log(i, 'No es primo'); 
    }
}
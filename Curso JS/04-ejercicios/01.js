function cualEsMayor(a , b){
    if (a > b){
        return a;
    }else return b; // operador ternario ? return (a > b) ? a : b 
}

let mayor = cualEsMayor(15,5);

console.log(mayor);
let palabra1 = 'amor'; 
let palabra2 = 'hola';
let son = false;  

console.log(palabra1); 
console.log(palabra2);

if(palabra1.length == palabra1.length){
    let array1 = [...palabra1]; //para convertir un string en array
    let array2 = [...palabra2];

    array1.sort(); //para ordenar
    array2.sort();
    
    palabra1 = array1.join('');//volvemos a pasar a string ya ordenado para luego comparar
    palabra2 = array2.join('');

    son = palabra1 == palabra2; //Validamos que tengan los mismo valores y "son" sea true
}

if(son){
    console.log("Son anagramas");
}
else{
    console.log("No son anagrama"); 
}
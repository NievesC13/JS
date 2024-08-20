//Cuando un objeto tiene el valor de otro, no se esta comparando los objetos en si
//Se estan comparando los espacios de memoria que ocupan estos objetos

let a = {};
let b = a; 

b.prop = 1;
console.log(a, b); 

let c = {prop : 1}; 

function suma(n){ // para un parametro lo toma como una variable diferente
    n.prop++;
}

suma(c); 
console.log(c)


//Los datos primitivos se copian cuando se asignan a otra variable cuando se asignan
//los de referencias se referencian -objs -arrays -funciones
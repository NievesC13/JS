function Usuario(nombre){// tambien son objetos, estos son objetos de primera clase
    this.nombre = nombre; 
}

console.log(Usuario.name); 
console.log(Usuario.length);

const U = Usuario; 
let user = new U('Nicolas');

console.log(user); 

function of(fn, arg){ // funcion dentro de funcion 
    return new fn(arg);
}

let user1 = of(Usuario, 'Cesar'); 
console.log(user1);

function Returned(){
    return function(){
        console.log('hola mundo');
    }
}

let saludo = Returned(); 
saludo(); 
/*
*Las funciones tienen propiedades y se pueden pasar como argumentos a otras funciones y pueden ser retornadas 
*/ 

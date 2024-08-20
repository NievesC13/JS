let user = {
    email : 'nieveschinchin@gmail.com',
    name : 'Cesar',
    direccion: {
        calle: 'Maca',
        numero: '45', 
    },
    activo: true, // valor boolean
    recuperarClave: function () { // funcion
        console.log("Recuperando clave"); 
    }, //Funcion anonima
}; // Programancion orientada a objetos 

console.log(user); 
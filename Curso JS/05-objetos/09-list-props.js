const punto = {
    x: 10,
    y: 15,
    dibujar(){  //funcion como parametro del objeto
        console.log('dibujando');
    } 
};

//delete punto.dibujar; 
if('dibujar' in punto){
    punto.dibujar();
}

//let keys = new Object.keys(punto); //. keysCrea un array de los parametros del objeto
console.log(Object.keys(punto));

for(let llave of Object.keys(punto)){ //con of iteramos un array
    console.log(llave, punto[llave]);
}

for(let entry of Object.entries(punto)){ // .entries crea un array de las propiedades de un objeto
    console.log(entry);
}// para acceder a las propiedades de un objeto cuando no se conocen las propiedades

for(let llave in punto){ // for in para iterear dentro de un objeto
    console.log(llave, punto[llave]);
}
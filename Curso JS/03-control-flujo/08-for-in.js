// Para iterar las propiedades de un objeto for in
let user = {
    id: 1, 
    name: 'Chanchito',
    age: 25,
};

for(let prop in user) {
    console.log(prop, user[prop]);// ara mostrar 'Nombre de la propiedad', 'Valor de propiedad'
}

// for off

let animales = ['Chanchito feliz', 'Dragron', 'Perro'];

for (let indice in animales){ // 'nombre de la variable' of ' El arreglo' 
    console.log(indice, animales[indice]);
} // Para arreglos no utilizar for in** Utilizar for off






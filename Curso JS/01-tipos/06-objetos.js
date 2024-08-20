// personaje de tv

let nombre = "Tajiro";
let anime = "Demon Slayer"; 
let edad = 16;

let personaje = {
    nombre: "Tanjiro", // par llave-valor 
    anime: "Demon slayer",
    edad: 16,
}; // objeto literal
console.log(personaje);
console.log(personaje.nombre); // para mostrar solo una propiedad
console.log(personaje['anime']);

personaje.edad = 13; //para modificar una propiedad
personaje['edad'] = 16;


delete personaje.anime; // para borrar una propiedad

console.log(personaje);
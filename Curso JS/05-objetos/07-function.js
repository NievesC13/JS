/**Constructor */

function Punto(x , y){
    this.x = x; 
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
}


let punto = {z : 7};

Punto.call(punto, 1, 2);//Metodo call que agrega valores de un objet a otro. Para extender objetos y prototipos

Punto.apply(punto, [1, 2]) // hace lo mismo pero los argumentos tiene que ingresar como array

console.log(punto); 


//Nunca usar
// const Point = new Function('x', 'y', `
// this.x = x; 
// this.y = y;
// this.dibujar = function() {console.log('Dibujando...');}
// `); 

// const p = new Point(1, 2);
// console.log(p);

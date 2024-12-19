/**
 * 
 * Calcular el area de un cuadrado, triangulo y reactangulo
 *  Triangulo =   base por altura partido por 2.
 *  Cuadrado = Base por Base
 *  Rectangulo = Base por altura
 */

let triangulo = [2,3];
let cuadrado = [2,2];
let rectangulo = [4,2];

function calcularArea(poligono){
    if(poligono.length > 0 || poligono.length < 3){

        let area = 0;

        //Para triangulo
        if(poligono[0] < poligono [1]){

            let base = poligono[0]; 
            let altura = poligono[1];
            area = (base * altura) / 2;
            console.log("El area del triangulo es: ", area); 

        }else {
            // Cuadrado o Rectángulo
            let base = poligono[0]; 
            let altura = poligono[1];
            area = base * altura;
            if (base === altura) {
                console.log("El área del cuadrado es:", area);
            } else {
                console.log("El área del rectángulo es:", area);
            }
        }

    }else console.log("El poligono ingresado no es valido.")
    
}

calcularArea(triangulo); 
calcularArea(cuadrado); 
calcularArea(rectangulo); 





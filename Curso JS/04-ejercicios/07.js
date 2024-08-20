/**
 * 
 * crear algoritmo que devuleva
 * el precio del producto
 * mas el impuesto
 * 
 */

function precioCompleto(precio, impuesto){   
     let precioFinal = 0; 

     precioFinal = precio + (precio * impuesto); 
     
     return precioFinal; 
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
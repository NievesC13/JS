// bit digito binario : 0, 1
// Byte: 8 bits
// Byte: 00000000 -> 0 
// Byte: 00000001 -> 1 
// Byte: 00000010 -> 2 
// Byte: 00000011 -> 3 
// Byte: 00000100 -> 4
// Byte: 00000101 -> 4
// Decimal: 0 1 2 3 4 5 6 7 8 9

//operador de bitwise para suma binaria y devulve el valor de decimal
console.log(1 | 3); // 00000101
console.log(1 | 4); // 00000101
console.log(3 | 5); // 00000101


//Ambos bits tienen que ser uno para que devuelva 1 o multiplicacion de binario 
console.log(1 & 3); // 00000101
console.log(1 & 4); // 00000101
console.log(3 & 5); // 00000101
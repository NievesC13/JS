let vestido = {
    precio: 400,
    descuento: 10, 
    neto(){
        valorFinal = this.precio - (this.precio * (this.descuento / 100)); 
        return valorFinal;
    }
}

console.log(`Vestido: ${vestido.precio}, Descuento: %${vestido.descuento}, Valor final ${vestido.neto()}`)
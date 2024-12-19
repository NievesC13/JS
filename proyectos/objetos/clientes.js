/**
 * 
 * En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, telefono.

    Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

    idCliente: número de cliente (su lugar en la lista de clientes)
    total: número con el imorte total de la factura
    estado: pagada o pendiente
    Los métodos serán

    cobrar(): pone el estado en pagada.
    imprimir(): imprime los datos de la factura
    Para probar crea tres clieentes y al menos una factura.


    Podemos tener los siguietnes clientes

    Juan, juan#mail.com, 3456718
    Marisa, marisa@mail.com, 5556123
    Luis, luis@mail.com, 2354322
    Emitimos una factura al cliente 1, o sea, a Juan. el importe es 300 euros. Si se imprime factura.estado saldrá "pendiente".

    Depués de hacer factura.pagar() al imprimir factura.estado saldrá "pagada".

 */

let clientes = new Array(); 

class Factura{
    constructor(id, total, listaCliente){
        this.cliente = listaCliente[id - 1], 
        this.total = total;
        this.estado = "Pendiente"; 
    }
    cobrar(){
        this.estado = "Pagada"
    }
    imprimir(){
        console.log("Factura de " + this.cliente.nombre); 
        console.log("Total : " + this.total); 
        console.log("Estado : " + this.estado); 
    }
}

class Cliente{
    constructor(nombre, email, tlf){
        this.nombre = nombre; 
        this.email = email; 
        this.tlf = tlf;
    }
}

clientes[0] = new Cliente('Juan', 'juan#mail.com', 3456718)
clientes[1] = new Cliente('Marisa', 'marisa@mail.com', 5556123)
clientes[2] = new Cliente('Luis', 'luis@mail.com', 2354322)

const factura1 = new Factura(1, 300, clientes);

factura1.imprimir(); 
factura1.cobrar(); 
factura1.imprimir(); 
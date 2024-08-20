const user = {
    //Propiedades
    name: 'Cesar', 
    lastName: 'Nieves', 
    age: 23,  
    //Metodos son las acciones de los objetos, en codigo son las funciones
    showFullName(){
        //la palabra clave this referencia al objeto en si, + la propiedad name
        return this.name + ' ' + this.lastName; 
    }
}
console.log(user.showFullName());

const account = {
    name: '516546451684646', 
    amount: 100, 
    deposit(quantity){ //agregar parametros al metodo
        this.amount = this.amount + quantity; 
    },
    withdraw(quantity){
        if(this.amount > 0){
            this.amount = this.amount - quantity;
        }else{ return this.amount = 0; }
    }
}

account.deposit(100)
account.deposit(50)
console.log(account);

account.withdraw(200)
account.withdraw(125)
console.log(account);







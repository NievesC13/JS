const util = require('util'); //modulo de node 
const sleep = util.promisify(setTimeout); 

module.exports = {
    async taskOne(){ 
        try{
            throw new Error('Some problem'); //Para lanzar un error que cancela toda la ejecucion 
            await sleep(4000); // para que se retrase 4 seg
            return 'one value'; 
        }catch(e){ // EL catch agarra el error pero continua ejecutando el resto de tareas 
            console.log(e); 
        }
        
    }, 
    async taskTwo(){

        try{
            //throw new Error('Some problem'); 
            await sleep(2000); // para que se tarde 2seg
            return 'two value'; 
        }catch(e){
            console.log(e); 
        }
        
    }
};
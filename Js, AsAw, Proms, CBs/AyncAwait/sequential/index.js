const { taskOne, taskTwo } = require('./tareas.js'); //para importar require

async function main() {
    try{
        console.time('Measuring time'); // Para mostrar el tiempo que toma una accion 

        //Para ejecutar acciones de manera paralela, para que inicie un proceso y ejecuta el siguiente sin dejar que el primero termine
        //Para que los procesos terminen a la misma vex
        const result = await Promise.all([taskOne(), taskTwo()]) // PAra ejecutar de manera paralela ambas funciones se usa el Promise.all
        console.timeEnd('Measuring time'); 

        console.log('Task one returned: ',result[0]); 
        console.log('Task two returned: ',result[1]); 
    }catch(e){
        console.log(e); 
    }
}
main(); 

async function reqHandler ( req, res ) { // palabra clase en la funcion cuando se sabe que es async 
    try { 
        const user = await User.findById(req.UserId) //el await devuelve el resultado de esa funcion cuando se termine
        const tasks = await Task.findById(user.taskid); // async 
        tasks.completed = true; 
        await tasks.save(); // llamada async que devuelve algo, por eso se utiliza el await
        res.send('Task completed'); 

    }catch(e) { // Es el que captura el error 
        res.send(e);
    }   
}
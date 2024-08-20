function reqHandler(req, res) {
    User.findById(req.userId, function(err, user) { // req a una base de datos
        // como ndjs es async no va a esperar por la base de datos para seguir ejecutando codigo, 
        //asi que si queremos escribir un codigo que dependa del anterior, escribir aqui adentro
        

        if(err) {
            res.send(err); 
        }else {
            Task.findById(user,taskId, function(err, task) {
                if(err) {
                    return res.send(err)
                } else {
                    tasks.complited = true; 
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err) 
                        } else send('Task Completed'); // Callback hell
                    })
                }
            })
        }
    })
}

//Promesas 

function reqHandler (req, res ) {
    User.findById(req.userId)
        .then(function(user) {
            res.send(user) // .send para enviar al objeto res(respuesta).
            return Task.findById(user.taskId)
        })  // Esta es la promesa: .them = Cuando termine la ejecucin se ejecuta la funcion solo acepta parametros positivos, osea que todo va bien  
        .then(function(tasks) {
            tasks.complited = true; 
            return tasks.save(); //Operacion async porque hace consulta a la base de datos 
            // Se return y se le hace otra promesa
        })
        .then(function () {
            res.send('Task completed')
        })
        .catch(function(errors) { // .catch La funcion que captura el error 
            res.send(errors); 
        })//El .catch captura todos los errores de todas las promesas qeu se hagan 
} // Promesas y callbacks son lo mismo pero mas entedibles
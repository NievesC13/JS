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
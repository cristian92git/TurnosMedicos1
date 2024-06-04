//levantar el server, setear express, configurar ls omiddlewares
//esta constante tiene el objeto para trabajar con sqlite
const sqlite = require('sqlite3').verbose();
//es como lso imports en Java


// Creacion de server
const express = require('express')
const app = express()
const port = 3000



//BBDD



//db es el bojete/variable con el que puedo realizar conexione,s consultas, insert, etc
//conexion a la bbdd    
const db = new sqlite.Database('./turnosmedicos.db', sqlite.OPEN_READWRITE , (err) => {

if (err) {
    return console.log('error de conexion');
}else{
        console.log('conexion exitosa');
}

}); 






app.get('/', (req, res) => {

  res.send('Hello World!')


})



//get 1 especialidad
app.get('/nuevoturno/especialidades/:id_especialidad/', (req, res)=> {

    const {id_especialidad} = req.params;

//consulta
sqlquery = 'SELECT * FROM Especialidad WHERE id_especialidad = ?';

db.all(sqlquery, [req.params.id_especialidad] ,(err, rows) => {
    if(err){
        return console.error('error al consultar por id');
    }else{
        console.log('SELECT OK');
        res.send(rows); 
    }

})

//cierre de la conexion
db.close((err) => {
    if(err){
        return console.log('error al cerrar la conexion')
    }
    
        return console.log('conexion cerrada')
    })

})



//app. listen

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
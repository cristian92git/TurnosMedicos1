


//queries:
let sqlquery = "CREATE TABLE IF NOT EXISTS Especialidad ( id_especialidad INTEGER PRIMARY KEY AUTOINCREMENT, "
sqlquery= sqlquery + "nombre VARCHAR(50) NOT NULL  )"

console.log(sqlquery);

//ejecutar la query:
db.run(sqlquery, (err) => {
    if(err){
        return console.log('Error al crear tabla');}
        else{
            return console.log ('tabla creada');
        }
})

/*
sqlquery = 'INSERT INTO Especialidad (nombre) VALUES (?), (?)';

let especialidades = ["Pediatria", "Cardiologia"];

db.run(sqlquery, especialidades, (err) => {
if(err){
    
    return console.log('error al insertar datos')
}else{
    
    console.log('INSERT OK')
}
})
*/

//consulta
/*
sqlquery = 'SELECT * FROM Especialidad';

db.all(sqlquery, (err, rows) => {
    if(err){
    
        return console.error('error al consultar')
    }else{
        console.log('SELECT OK')
        console.log(rows);
    }

})
*/



//API de consulta de especialidades







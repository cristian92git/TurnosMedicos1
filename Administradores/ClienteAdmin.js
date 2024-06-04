//Imports
var myCliente = new Cliente();
var myCliente_exports = myCliente.exports;

class ClienteAdmin{ 


    //constructor por default
    constructor( myCliente ){
        this.cliente = myCliente;
    
    }

    //crear tabla...

    //Metodos

/*

    //void ?
 function crearCliente(cliente) {
    
    sqlquery = 'INSERT INTO Clientes (DNI, NombreCLiente, FechaNacimiento) VALUES (?), (?), (?)';

    let nombre = this.cliente //deberia decir getnombre...
    let DNI = this.cliente//
    let FechaNacimiento = myClient

    //
    let especialidades = ["Pediatria", "Cardiologia"];
    
    // (sqlquery, aca deberian ir los metodos: myCliente.getter, (err)
    //preguntar por que no me aparecen los metodos.
    db.run(sqlquery, especialidades , (err) => {
    if(err){
        
        return console.log('error al insertar datos')
    }else{
        
        console.log('INSERT OK')
    }
    })

    

 }


      */ 


 /* Metodos
    //ABM - Basico
    crearCliente(Cliente cliente); //POST
    modificarCliente(Cliente cliente); //POST - completo
    modificarClienteParcial(Cliente cliente) // o int id_cliente, dato // PATCH
    eliminarCliente(CLiente cliente); //DELETE

    //Otros Servicios
    //en principio, no tiene


 */
   
}
class Cliente{

    constructor(id_cliente, DNI, nombreCliente, fechaNacimiento ){
        this.id_cliente = id_cliente;
        this.DNI = DNI;
        this.nombreCliente = nombreCliente;
        this.fechaNacimiento = fechaNacimiento;
        
    }


    get gId_cliente(){
        return this.id_cliente;
    }

    get gDNI(){
        return this.DNI;
    }

    get gNombreCliente(){
        return this.nombreCliente;
    }

    get gFechaNacimiento(){
        return this.fechaNacimiento;
    }

    // no hay settes para ID
    set sDNI(pDNI){
        this.DNI = pDNI;
    }

    set sNombreCliente(pNombreCliente){
        this.nombreCliente = pNombreCliente;
    }

    set sFechaNacimiento(pFechaNacimiento){
        this.fechaNacimiento = pFechaNacimiento;
    }


}//fin clase

//export
module.exports = Cliente;
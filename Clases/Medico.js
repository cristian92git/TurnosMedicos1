class Medico{

    //variables > no se necesitan

//constructor
constructor(id_medico, nombreMedico, DNI /* ,listado? */){
    this.id_medico = id_medico;
    this.nombreMedico = nombreMedico;
    this.DNI = DNI;

    //Lista PracticaMedica
    let listPMMedico = [];

}

//Getters y Setter

get gId_medico(){
    return this.id_medico;
}

get gNombreMedico(){
    return this.nombreMedico;
}

get gDNI(){
    return this.DNI;
}

get gListaPM(){
    return this.listPMMedico;
}

//no hay setter para ID

set sNombreMedico(pNombreMedico){
    this.nombreMedico = pNombreMedico;
}

set sDNI(pDNI){
    this.DNI = pDNI;
}

}//fin clase

//export
module.exports = Medico;
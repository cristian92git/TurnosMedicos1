class PracticaMedica{

//variables > no se necesitan

//constructor
constructor(id_practicamedica, nombrePM){
    this.id_practicamedica = id_practicamedica;
    this.nombrePM = nombrePM;
}


//Getters y Setter

get gId_practicamedica(){
    return this.id_practicamedica
}

get gNombrePM(){
    return this.nombrePM
}

//no hay setter para ID
set sNombrePM(pNombrePM){
    this.nombrePM = pNombrePM;
}


}//fin clase

//export
module.exports = PracticaMedica;
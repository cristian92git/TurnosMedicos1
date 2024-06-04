class Turno{

    constructor(id_turno, id_medico, id_practica_medica, fecha_turno ){
        this.id_turno = id_turno;
        this.id_medico = id_medico; //preguntar si se pasa la clase (que es como lo hacia en Labo I, Java)
        this.id_practica_medica = id_practica_medica; //gual que arriba
        this.fecha_turno = fecha_turno;
        
    }

    //Getters y Setters
    get gId_turno(){
        return this.id_turno;
    }

    //pregutnar si es la calse o el ID
    get gId_medico(){
        return this.gId_medico
    }
    //pregutnar si es la calse o el ID
    get gId_practica_medica(){
        return this.id_practica_medica
    }

    get gFechaTurno(){
        return this.fecha_turno;
    }

    //Id no lleva setter

    set sIdMedico(pIdMedico){
        this.id_medico = pIdMedico;
    }

    set sIdPM(pIdPM){
        this.id_practica_medica = pIdPM;
    }

    set sFechaTurno(pFechaTurno){
        this.fecha_turno = pFechaTurno;
    }


}//fin clase

//export
module.exports = Turno;
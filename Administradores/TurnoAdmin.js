//exports

//Turno
var myTurno = new Turno();
var myTurno_exports = myTurno.exports;

//Cliente
var myCliente = new Cliente();
var myCliente_exports = myCliente.exports;

//Medico
var myMedico = new Medico();
var myMedico_exports = myMedico.exports;


class TurnoAdmin{	

constructor(myTurno, myCliente, myMedico, fecha_turno){
    this.turno = myTurno;
    this.cliente = myCliente;
    this.medico = myMedico;
    this.fecha_turno, fecha_turno;
}


//Metodos

/*

CRUD - servicios basicos
crearTurno(Turno turno, int id_cliente) // POST
URI: /nuevoturno/datosturno/clientes/{cliente_id}   //para asociarlo en la BBDD. Recien aca hace el insert
{
	cliente_id: "",
	especialidad_id: "",
	practicamedica_id: "",
	centromedico_id: "",
	medico_id: "",
	dia: "", //consultar
	hora: "" //consultar
	
}

modificarTurno() //a ver con el profesor por las validaciones (POST y PATCH)
eliminarTurno(Turno turno) // DELETE
seleccionarTurno(int id_turno) //GET 1 Turno

//Otros Servicios
seleccionarDiasDisponiblePorMedico(int id_medico) //ver
GET
URI: /nuevoturno/medicos/{medico_id}/diasdisponibles

seleccionarHoraDisponible(id_medico, id_diadisponible) //
GET
URI: /nuevoturno/medicos/{medico_id}/diasdisponibles/{diadisp_id}/horasdisponibles





*/


}//fin clase
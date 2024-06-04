# TurnosMedicos1
Servicios de Turnos Medicos


Aclaraciones:
Importante:

1) le saqué 2 clases al original: Expecialidad y CentroMedico.  Ahora pasa a ser un consultorio de una especialidad X que quiere exponer sus servicios:
2) todavia tengo que ver la lógica de los turnos. 

3) este es un listado de los servicios que pensaba exponer:

ClienteAdmin :
CRUD Servicios:
	> Create
	> Select (1)
	> Update (POST/PATCH)
	> Delete

Otros Servicios
NO


MedicoAdmin:
CRUD Servicios:
	> Create
	> Select (1)
	> Update (POST/PATCH)
	> Delete

Otros Servicios
	>	listarMedicosPorOrdenAlfabetico();//GET (agregar limit)
	>   listarMedicosPorPracticaMedica(int id_practica_medica)//GET (agregar limit)


PracticaMedicaAdmin:
CRUD Servicios:
	> Create
	> Select (1)
	> Update (POST/PATCH)
	> Delete

Otros Servicios
	> listarPMporOrdenAlfabetico() //GET URI: /nuevoturno/practicamedicas (agregar limit)


TurnoAdmin:
CRUD:
	>  ServiciosCreate
	> Select (1)
	> Update (POST/PATCH)
	> Delete

Otros Servicios (relacionado al punto 2 - sobre como exponer los turnos)
	> seleccionarDiasDisponiblePorMedico(int id_medico) //ver (agregar limit)
		GET
		URI: /nuevoturno/medicos/{medico_id}/diasdisponibles

	> seleccionarHoraDisponible(id_medico, id_diadisponible) // (agregar limit)
		GET
		URI: /nuevoturno/medicos/{medico_id}/diasdisponibles/{diadisp_id}/horasdisponibles

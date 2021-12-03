
const obtenerCitasDisponibles = async (especialidad, fecha_inicio, fecha_final) => {
    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/medical-appointments/appointments"
    );
    console.log(response);
    const CITAS = await response.json();
    let fecha1 = new Date(fecha_inicio);
    let fecha2 = new Date(fecha_final);
    return CITAS.filter(cita => {
        let fechaCita = new Date(cita.fecha);
        if (cita.especialidad === especialidad && fechaCita >= fecha1 && fechaCita <= fecha2) {
            return true;
        }
    })
}



const confirmarCita = async (idCita) => {
    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/medical-appointments/confirm/" + idCita,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    console.log(response);
    const CITAS = await response.json();
    console.log(CITAS);
    mensaje = "Cita confirmada satisfactoriamente, desafortunadamente esta es una API fake, por lo cuál no tendrá ningún efecto sobre las citas";
    return mensaje;
}





module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
module.exports.confirmarCita = confirmarCita;
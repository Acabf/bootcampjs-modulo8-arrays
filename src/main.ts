type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatria: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        pacientesPediatria.push(pacientes[i]);
      }
    }
    return pacientesPediatria;
  };
  
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatriaMenorDiez: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenorDiez.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenorDiez;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
        activarProtocolo = true;
        break;
      }
    }
    return activarProtocolo;
};

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    const nuevaListaPacientes: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = { ...pacientes[i] }; // Hacemos una copia del paciente
      if (paciente.especialidad === "Pediatra") {
        paciente.especialidad = "Medico de familia";
      }
      nuevaListaPacientes.push(paciente);
    }
    return nuevaListaPacientes;
};

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Pediatra") {
        return true;
      }
    }
    return false;
};

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const conteo: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0
    };
  
    for (let i = 0; i < pacientes.length; i++) {
      switch (pacientes[i].especialidad) {
        case "Medico de familia":
          conteo.medicoDeFamilia++;
          break;
        case "Pediatra":
          conteo.pediatria++;
          break;
        case "Cardiólogo":
          conteo.cardiologia++;
          break;
      }
    }
  
    return conteo;
};
  
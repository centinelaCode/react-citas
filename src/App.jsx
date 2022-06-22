import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // funcion para eliminar un paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( pac => pac.id !== id);    
    setPacientes(pacientesActualizados);


  }


  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App

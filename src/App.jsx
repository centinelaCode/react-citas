import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App

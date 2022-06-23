import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});



  //useEffect para cargar el state si hay algo en localstorage
  useEffect(() => {
    const obtenerLS = () => {      
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      // console.log(localStorage.getItem('pacientes'))
      setPacientes(pacientesLS)
    }

    obtenerLS();
  }, [ ])

  //useEffect para guardar en local storage
  useEffect(() => {  
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])




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

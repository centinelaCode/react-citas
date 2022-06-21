import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente }) => {

  // States
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(paciente)
  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).slice(2,-1);
    const fecha = Date.now().toString(36);

    // console.log(random + fecha);

    return random + fecha;
    

  }


  // Funcitions
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
      // Hay al menos un campo vacio
      setError(true);
      return;
    } 
    // Ya estan todos los campos llenos
    setError(false);

    // creamos el objeto con la información del paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
      id: generarId()
    }

    setPacientes([...pacientes, objPaciente]);

    // reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFechaAlta('');
    setSintomas('');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={ handleSubmit }
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input 
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div >
          <label 
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input 
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
            value={fechaAlta}
            onChange={ (e) => setFechaAlta(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea 
            rows="4"
            id="sintomas"
            placeholder="Escribe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />

        </div>

       

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>

    </div>
  )
}

export default Formulario;

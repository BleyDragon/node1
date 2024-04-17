import React, { useState } from 'react';
import axios from 'axios';

const RegistroEmpleado = ({ actualizarListaEmpleados }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [puesto, setPuesto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const nuevoEmpleado = {
        nombre,
        email,
        puesto,
      };

      await axios.post('http://localhost:5000/api/empleados', nuevoEmpleado);

      // Limpiar los campos después de enviar el formulario
      setNombre('');
      setEmail('');
      setPuesto('');

      // Actualizar la lista de empleados después de registrar uno nuevo
      actualizarListaEmpleados();

      alert('Empleado registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el empleado:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            id="puesto"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
            required
          />
          <label htmlFor="puesto">Puesto</label>
        </div>
        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistroEmpleado;
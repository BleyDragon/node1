import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarEmpleado = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [puesto, setPuesto] = useState('');
  const { id } = useParams();
  const navigate = useNavigate(); // Importar el hook useNavigate

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/empleados/${id}`);
        const { nombre, email, puesto } = response.data;
        setNombre(nombre);
        setEmail(email);
        setPuesto(puesto);
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    obtenerEmpleado();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const empleadoActualizado = {
        nombre,
        email,
        puesto,
      };

      await axios.put(`http://localhost:5000/api/empleados/${id}/actualizar`, empleadoActualizado);

      // Usar useNavigate para dirigir a la URL del empleado actualizado
      navigate(`/empleados/${id}`);
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
      alert('Ha ocurrido un error al actualizar el empleado.'); // Mostrar mensaje al usuario
    }
  };

  return (
    <div>
      <h2>Editar Empleado</h2>
      <form onSubmit={handleSubmit}>
        {/* Reemplazar con el componente independiente para los campos de entrada */}
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={puesto} onChange={(e) => setPuesto(e.target.value)} />
        <button type="submit" className="btn">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarEmpleado;


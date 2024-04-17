import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetallesEmpleado = () => {
  const [empleado, setEmpleado] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const obtenerEmpleado = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/empleados/${id}`);
        setEmpleado(response.data);
      } catch (error) {
        console.error('Error al obtener el empleado:', error);
      }
    };

    obtenerEmpleado();
  }, [id]);

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Empleado</h2>
      <p>
        <strong>Nombre:</strong> {empleado.nombre}
      </p>
      <p>
        <strong>Email:</strong> {empleado.email}
      </p>
      <p>
        <strong>Puesto:</strong> {empleado.puesto}
      </p>
      <div>
           {/* ... */}
         <Link to={`/empleados/${id}/editar`} className="btn">
        Editar
      </Link>
     </div>
    </div>
  );
};

export default DetallesEmpleado;
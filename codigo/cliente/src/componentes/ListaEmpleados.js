import React from 'react';

const ListaEmpleados = ({ empleados }) => {
  return (
    <div>
      <h2>Lista de Empleados</h2>
      <ul className="collection">
        {empleados.map((empleado) => (
          <li key={empleado._id} className="collection-item">
            <strong>Nombre:</strong> {empleado.nombre}<br/>
            <strong>Email:</strong> {empleado.email}<br/>
            <strong>Puesto:</strong> {empleado.puesto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEmpleados;
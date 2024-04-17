import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import ListaEmpleados from './componentes/ListaEmpleados';
import RegistroEmpleado from './componentes/RegistroEmpleado';
import EditarEmpleado from './componentes/EditarEmpleado';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetallesEmpleado from './componentes/DetallesEmpleado';

function App() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/empleados');
      setEmpleados(response.data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  const actualizarListaEmpleados = () => {
    obtenerEmpleados();
  };

  return (
    <Router>
      <div className="container">
        <h1>Registro de Empleados</h1>
        <Routes>
          {/* Envuelve RegistroEmpleado en un componente Route para la ruta raíz */}
          <Route
            path="/"
            exact
            element={<RegistroEmpleado actualizarListaEmpleados={actualizarListaEmpleados} />}
          />

          {/* Mantén ListaEmpleados como está */}
          <Route path="/" element={<ListaEmpleados empleados={empleados} />} />

          {/* Mantén la ruta para DetallesEmpleado */}
          <Route path="/empleados/:id" component={DetallesEmpleado} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

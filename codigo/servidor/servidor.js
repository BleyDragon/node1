const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const empleadosRoutes = require('./rutas/empleados');

const app = express();
const puerto = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost/registro_empleados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

// Rutas
// Aquí agregaremos las rutas para las operaciones CRUD
app.use('/api/empleados', empleadosRoutes);

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor backend ejecutándose en el puerto ${puerto}`);
});
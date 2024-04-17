const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    puesto: {
      type: String,
      required: true,
    },
  });
  
  const Empleado = mongoose.model('Empleado', empleadoSchema);
  
  module.exports = Empleado;
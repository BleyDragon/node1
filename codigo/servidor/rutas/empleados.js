const express = require('express');
const router = express.Router();
const Empleado = require('../modelos/empleado');

// Obtener todos los empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los empleados' });
  }
});

// Crear un nuevo empleado
router.post('/', async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el empleado' });
  }
});

// Obtener un empleado por ID
router.get('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el empleado' });
  }
});

// Actualizar un empleado por ID
router.put('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el empleado' });
  }
});

// Eliminar un empleado por ID
router.delete('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
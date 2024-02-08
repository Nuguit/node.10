const express = require('express');
const router = express.Router();

// Simulación de base de datos de clientes
let clientes = [];


router.post('/', (req, res) => {
    const { nombre, apellido, DNI } = req.body;

    
    const clienteExistente = clientes.find(cliente => cliente.DNI === DNI);
    if (clienteExistente) {
        return res.status(400).json({ mensaje: 'El cliente ya está registrado.' });
    }

   
    const nuevoCliente = { nombre, apellido, DNI };
    clientes.push(nuevoCliente);

    res.json({ mensaje: 'Cliente registrado correctamente.' });
});


router.put('/:DNI', (req, res) => {
    const { DNI } = req.params;
    const { nombre, apellido } = req.body;

    
    const cliente = clientes.find(cliente => cliente.DNI === DNI);
    if (!cliente) {
        return res.status(404).json({ mensaje: 'Cliente no encontrado.' });
    }

    cliente.nombre = nombre;
    cliente.apellido = apellido;

    res.json({ mensaje: 'Cliente actualizado correctamente.' });
});

module.exports = router;
const express = require('express');
const router = express.Router();


let reservas = [];


router.post('/checkin', (req, res) => {
    const { DNI, habitacion, fechaCheckIn, fechaCheckOut } = req.body;

    

    res.json({ mensaje: 'Reserva realizada con éxito.' });
});


router.put('/checkout/:DNI', (req, res) => {
    const { DNI } = req.params;

  

    res.json({ mensaje: 'Check-out completado con éxito.' });
});

module.exports = router;

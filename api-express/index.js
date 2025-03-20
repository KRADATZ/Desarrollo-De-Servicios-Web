<<<<<<< HEAD
import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import userRoutes from './routes/users.js'

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
=======
const express = require('express');
const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta GET para obtener datos
app.get('/api/mensaje', (req, res) => {
    res.json({ mensaje: '¡Hola, este es un mensaje desde la API!' });
});

// Ruta POST para recibir datos
app.post('/api/usuario', (req, res) => {
    const usuario = req.body;
    res.json({ mensaje: 'Usuario recibido', datos: usuario });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
>>>>>>> 2447ae870e097f78b4e6de26e03b28bfd79e72de

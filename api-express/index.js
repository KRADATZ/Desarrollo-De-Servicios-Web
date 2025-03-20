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

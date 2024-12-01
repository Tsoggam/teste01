const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let storedString = '';

// Middleware para habilitar o CORS
app.use(cors());
app.use(express.json());

// Endpoint para receber a string
app.post('/receive-string', (req, res) => {
    storedString = req.body.string || '';
    console.log('String recebida:', storedString);
    res.status(200).send('String armazenada com sucesso.');
});

// Endpoint para enviar a string
app.get('/get-string', (req, res) => {
    res.json({ string: storedString });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

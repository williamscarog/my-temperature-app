// server.js
import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/temperature', (req, res) => {
  // Simulación de la lectura de temperatura desde la placa Arduino ESP32
  const temperatura = Math.floor(Math.random() * 30) + 20; // Simula una temperatura entre 20°C y 50°C
  res.json({ temperatura });
});

app.listen(port, () => {
  console.log(`Servidor local en http://localhost:${port}`);
});
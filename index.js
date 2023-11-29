const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para formatear la respuesta del body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey bienvenido');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
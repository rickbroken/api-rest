import express, { json } from "express";
import { readFileSync } from "node:fs";

const dittoJSON = JSON.parse(readFileSync('./ditto.json', 'utf-8'));

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para formatear la respuesta del body
app.use(json());

app.get('/', (req, res) => {
  res.json(dittoJSON);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
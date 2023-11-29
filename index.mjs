import express, { query } from "express";
import mysql from "mysql";

const app = express();
const PORT = process.env.PORT ?? 3000;

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "test"
})

//midellware para formatear la respuesta del body
app.use(express.json());

db.connect((err) => {
  if(err){
    return console.log(`Hay un error al intentar conectar con la base de datos`);
  } else {
    console.log("Conexion a db exitosa")
  }
});

app.get('/GET/usuarios',(req, res)=>{
  const sql = 'SELECT * FROM usuarios';

  db.query(sql,(err, data)=>{
    if(err){
      res.status(500).send('Error interno del servidor');
      console.log(`Error al intentar mostrar la informacion: ${err}`)
    } else {
      res.json(data)
    }
  });
});

app.delete('/DELETE/usuarios/:id',(req, res)=>{
  const sql = 'DELETE FROM usuarios WHERE id = ?';
  const {id} = req.params;

  db.query(sql, [id], (err, data)=>{
    if(err){
      console.log(`Erro al itentar eliminar un usuario: ${err}`)
      return res.status(500).send('Error interno del servidor');
    } else {
      res.send('Usuario eliminado Correctamente');
    }
  })
})

app.put('/PUT/usuarios/:id',(req, res)=>{
  const {id} = req.params;
  const {nombres, apellidos, ciudad, edad, profesion} = req.body;

  const sql = `UPDATE usuarios SET nombres=?, apellidos=?, ciudad=?, edad=?, profesion=? WHERE id=?`;
  
  db.query(sql,[nombres,apellidos,ciudad,edad,profesion,id],(err, data)=>{
    if(err){
      console.log(`Erro al itentar editar un usuario: ${err}`)
      return res.status(500).send('Error interno del servidor');
    } else {
      res.send('Usuario editado Correctamente');
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`Server linteding on port : http://localhost:${PORT}`)
})

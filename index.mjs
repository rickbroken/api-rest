import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;


//midellware para formatear la respuesta del body
app.use(express.json());


app.get('/',(req, res)=>{
    res.send('Hey bienvenido')
  }
);


app.listen(PORT, ()=>{
  console.log(`Server linteding on port : http://localhost:${PORT}`)
})

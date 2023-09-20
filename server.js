const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send('Bienvenido a mi primer servidor');
});


const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor web escuchando en http://localhost:${puerto}`);
});
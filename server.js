
const express = require('express');
const app = express();
const path = require('path');
const { execPath } = require('process');
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')))

app.get('/ola', (req,res)=> {
  res.sendFile(path.join(__dirname,'form.html'))
});

app.get('/css',(req,res) => {
   res.sendFile(path.join(__dirname,'public/style.css'));
})

app.listen(PORT,() => {
    console.log('Servidor rodando na Port:' + PORT)
})









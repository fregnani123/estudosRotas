
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000

app.get('/', (req,res)=> {
    res.send('oi')
})

app.listen(PORT,() => {
    console.log('Servidor rodando na Port:' + PORT)
})









const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/teste', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'teste.html'));
});

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log('Server rodando na porta ' + PORT);
});


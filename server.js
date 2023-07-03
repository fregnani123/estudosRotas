const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const routes = require('./src/routes/routes')



app.use('/', routes);

app.get('/teste', routes)

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log('Server rodando na porta ' + PORT);
});


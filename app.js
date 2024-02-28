const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const RESTAURANTS = require('./public/jsons/restaurant.json').results;

app.get('/', (req, res) => {
  res.render('index');
});

app.set('views', './views');
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ extname: '.hbs' }));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});

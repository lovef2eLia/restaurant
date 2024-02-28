const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const RESTAURANTS = require('./public/jsons/restaurant.json').results;

app.get('/', (req, res) => {
  res.redirect('/restaurants');
});

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants: RESTAURANTS });
});

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id;
  const restaurant = RESTAURANTS.find(
    (restaurant) => restaurant.id.toString() === id
  );

  res.render('moreInfo', { restaurant: restaurant });
});

app.set('views', './views');
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ extname: '.hbs' }));

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});

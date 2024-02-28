const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const restaurants = require('./public/jsons/restaurant.json').results;

app.get('/', (req, res) => {
  res.redirect('/restaurants');
});

app.get('/restaurants', (req, res) => {
  const keyword = req.query.search?.trim();
  const matchedRestaurants = keyword ? restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase());
  }) : restaurants;

  res.render('index', { restaurants: matchedRestaurants });
});

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find(
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

// Core modules 
const path = require('path');
// Funciton of express
const express = require('express');
const hbs = require ('hbs');

// Call the function to create a new express app (instance)
const app = express();
// Paths  for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Handlebars - ingect dinamic values into the html
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// hbs partials 
hbs.registerPartials(partialsPath);
// costumize the server - static (pages that are never going to change)
app.use(express.static(publicDirectoryPath));

// Render home view
app.get('', (req, res) => {
  res.render('index', { 
    header: "home page",
    author: "Jose Andres"
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    header: "About Page",
    author: "Jose Andres"
  });
});

app.get('/help', (req, res) => {
  res.render('help', { 
    header: "Help Page",
    phrase: "What's your question?",
    author: "Jose Andres"
  });
});

// weather
app.get('/weather', (req, res) => {
  res.send({
    header: "Weather Page",
    location: "Philadelphia",
    forecast: "It currently 15 degrees Celcius",
    author: "Jose Andres"
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', { 
    errormsj: "Help page not found"
  });
});

// default
app.get('*', (req, res) => {
  res.render('404', { 
    errormsj: "Page not found"
  });
});

// server up
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
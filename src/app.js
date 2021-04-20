// Core modules 
const path = require('path');
// Funciton of express
const express = require('express');

// Call the function to create a new express app (instance)
const app = express();
// Paths  for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Handlebars - ingect dinamic values into the html
app.set('view engine', 'hbs');
app.set('views', viewsPath);
// costumize the server - static (pages that are never going to change)
app.use(express.static(publicDirectoryPath));

// Render home view
app.get('', (req, res) => {
  res.render('index', { 
    title: "Weather",
    name: "Jose Andres"
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: "about page",
    name: "Jose Andres"
  });
});

app.get('/help', (req, res) => {
  res.render('help', { 
    title: "help page",
    phrase: "What's your question?"
  });
});

// weather
app.get('/weather', (req, res) => {
  res.send({
    location: "Philadelphia",
    forecast: "It currently 15 degrees Celcius"
  });
});

// server up
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
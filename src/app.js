// Core modules 
const path = require('path');
// Funciton of express
const express = require('express');
const hbs = require ('hbs');
// Utils functions
const forecast = require('../utils/forecast');
const geocode = require('../utils/geocode');


// Call the function to create a new express app (instance)
const app = express();
// heroku port
const port = process.env.PORT || 3000;

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
    header: "Weather page",
    author: "Jose Andres",
    instructions: "Insert the location"
  });
});

// About secction
app.get('/about', (req, res) => {
  res.render('about', { 
    header: "About Page",
    author: "Jose Andres"
  });
});

// Help secction
app.get('/help', (req, res) => {
  res.render('help', { 
    header: "Help Page",
    phrase: "What's your question?",
    author: "Jose Andres"
  });
});

// weather
app.get('/weather', (req, res) => {
  if(!req.query.address){   // Validation
    return res.send({
      error: "Must provide a location"
    })
  }
  // Request the info 
  geocode(req.query.address, (error, data) => {
    if(error){
      return console.log(error);
    }
    forecast(data.latitud, data.longitud, (error, forecastData) =>{
      if(error){
        return console.log(error);
      }
      res.send({
        header: "Weather Page",
        location: req.query.address,
        forecast: 'The weather in ' + data.location + ' is ' + forecastData,
        author: "Jose Andres"
      });
    });
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
app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
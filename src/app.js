// Funciton of express
const express = require('express');

// Call the function to create a new express app (instance)
const app = express();

// Home
app.get('', (req, res) => {
  res.send('Hello express!');
});

// help
app.get('/help', (req, res) => {
  res.send('Helo page');
});

// about
app.get('/about', (req, res) => {
  res.send('about page');
});

// help
app.get('/weather', (req, res) => {
  res.send('hello weather');
});

// server up
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});



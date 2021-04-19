// Core modules 
const path = require('path');
// Funciton of express
const express = require('express');

// Call the function to create a new express app (instance)
const app = express();

// costumize the server
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath));

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
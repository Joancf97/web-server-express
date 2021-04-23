const request = require('request');

const forecast = (lat, long, callback) => {
  // URL of weatherstack
  const url = 'http://api.weatherstack.com/current?access_key=c8172dac92ec90dad978d5e9afa5fad7&query='+lat+','+long;

  // Request the data
  request({url: url, json: true}, (error, response) => {
    if(error){
      callback("unable to connect to weather service", undefined);
    }else if (response.body.error){ 
      callback("unable to get the weather info", undefined);
    } else {
      const currentTemp = response.body.current.temperature;
      const felstLike = response.body.current.feelslike;
      callback(undefined,`It's currently ${currentTemp}C and feels like ${felstLike}C`);
    }
  });
}

module.exports = forecast;
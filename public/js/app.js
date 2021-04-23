console.log('client side javascript code');

//  Fetch api from the client side
fetch('http://localhost:3000/weather?address=Guatemala').then((response) => {
  response.json().then((data) => {
    if(data.error){ 
      console.log(data.error);
    } else { 
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
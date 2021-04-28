const wetaherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('m1');
const message2 = document.getElementById('m2');


wetaherForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page to reload
  //  Fetch api from the client side
  const location = search.value
  fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
      if(data.error){ 
        message1.textContent = data.error;
      } else { 
        message1.textContent = "Country: " + data.location;
        message2.textContent = "Forecast: " + data.forecast;
      }
    });
  });

});
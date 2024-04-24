document.getElementById("weatherForm").addEventListener("submit", (event) => {
  let city = document.getElementById("cityInput").value;
  getWeather(event, city)
}
  );

// How to use fetch
// fetch is a method on the global window object
const API_KEY = "c58b2967af4ab075eb18b72ed13cc976";
function getweatherData(latitude, longitude) {
  //Returns a promise a synch
  // variables

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const tempPara = document.createElement("p");
      tempPara.textContent = data.main.temp;
      tempPara.style.fontSize = "3rem";
      
      let weatherResults = document.getElementById("weatherResults"); 
      weatherResults.textContent = "";
      weatherResults.append(tempPara);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Geocoding API call


function getWeather(event, city ) {
  let countryCode = 1;
  let limit = 5;
  event.preventDefault();
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=${limit}&appid=${API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      getweatherData(data[0].lat, data[0].lon);
    })
    .catch(console.error);
}



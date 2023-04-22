/*

let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = day + " " + hours + ":" + minutes;

// serch city temp

function searchCityTemperature(response) {
  console.log(response);
  let heading = document.querySelector("h1");
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind");
  let humidity = Math.round(response.data.main.humidity);
  let windSpeed = Math.round(response.data.wind.speed);

celsiusTemperature = response.data.main.temp;

  heading.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  windSpeedElement.innerHTML = `Wind Speed: ${windSpeed} km/h`;
}

// search city
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let heading = document.querySelector("#search-city");
  let apiKey = "38386c702ec671ac43837ee169cd48bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  heading.innerHTML = `${cityInput.value}`;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}

// find location
function findCurrentLocation(position) {
  let apiKey = "38386c702ec671ac43837ee169cd48bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}

// default city
function defaultCity(city) {
  let heading = document.querySelector("h1");
  let apiKey = "38386c702ec671ac43837ee169cd48bd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  heading.innerHTML = city;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}

function runNavigator() {
  navigator.geolocation.getCurrentPosition(findCurrentLocation);
}

let currentTimeElement = document.querySelector("#current-time");
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);




//display fahrenheit
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9 ) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

//display Celsius 
function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;


let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", runNavigator);

defaultCity("London");*/



//get date and time

let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

h2.innerHTML = day + " " + hours + ":" + minutes;

function formatDay(timestamp){
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon","Tue","Wed", "Thu","Fri","Sat"]

  return days[day];


}




function displayForecast(response) {
  let forecast = response.data.daily;
  forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class ="row">`;
  forecast.forEach(function (forecastDay,index) {
if (index < 6){
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-day">${formatDay(forecastDay.dt)}</div>
        
        <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="42">
        <div class ="weather-forecast-temperature">
        <span class="weather-forecast-max">${Math.round(forecastDay.temp.max)}&deg</span>
        <span class="weather-forecast-min">${Math.round(forecastDay.temp.min)}&deg</span>
        </div>
      </div>
`;
}
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  
}
function getForecast(coordinates){
  console.log(coordinates);
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}




// search city
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let heading = document.querySelector("#search-city");
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  heading.innerHTML = `${cityInput.value}`;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}

// find location
function findCurrentLocation(position) {
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}

// default city
function defaultCity(city) {
  let heading = document.querySelector("h1");
  let apiKey = "5354b60afda2b7800186c06153932396";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  heading.innerHTML = city;
  axios.get(`${apiUrl}`).then(searchCityTemperature);
}



function runNavigator() {
  navigator.geolocation.getCurrentPosition(findCurrentLocation);
}
//search temperature

function searchCityTemperature(response) {
  console.log(response);
  let heading = document.querySelector("h1");
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind");

  celsiusTemperature = response.data.main.temp;

  let humidity = Math.round(response.data.main.humidity);
  let windSpeed = Math.round(response.data.wind.speed);
  heading.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
  windSpeedElement.innerHTML = `Wind Speed: ${windSpeed} km/h`;
  
  getForecast(response.data.coord)
}

let currentTimeElement = document.querySelector("#current-time");
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", runNavigator);

//display fahrenheit
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

//display Celsius
function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

defaultCity("London");

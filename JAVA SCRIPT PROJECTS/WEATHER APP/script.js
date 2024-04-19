//f97cc3e5fcb7435d869111902241804

//http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

const weatherContainer = document.querySelector(".weather-container");
const searchCity = document.getElementById("searchCity");
const searchBtn = document.querySelector(".searchBtn");
const cityName = document.querySelector(".city-name");
const stateName = document.querySelector(".state-name");
const countryName = document.querySelector(".country-name");
const zoneName = document.querySelector(".zone-Name");
const localTime = document.querySelector(".localTime");
const temperature = document.querySelector(".temperature");
const weatherCondn = document.querySelector(".weather-condn");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const rain = document.querySelector(".rain");
const weatherIcon = document.querySelector(".weather-icon");

let key = "f97cc3e5fcb7435d869111902241804";

//let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.value}`;

const weather = async () => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.value}`);
  const data = await res.json();
  console.log(data);
  console.log(searchCity.value);
  cityName.innerHTML = data.location.name;
  stateName.innerHTML = data.location.region;
};

searchBtn.addEventListener("click", (e) => {
  weather();
  console.log(searchCity.value);
});

import './style.css';

const searchBar = document.getElementById('search-bar');
const submitBtn = document.getElementById('submit-btn');
const key = '77c6d40a83274e6ab4b144221231907';
let location = 'toronto';
const errorMsg = document.querySelector('.error-msg');

function updateWeather(weather) {
  const conditionElement = document.querySelector('.condition');
  const locationElement = document.querySelector('.location');
  const tempElement = document.querySelector('.temp');
  const feelsLikeElement = document.querySelector('.feels-like');
  const humidityElement = document.querySelector('.humidity');
  const visibilityElement = document.querySelector('.visibility');

  console.log(weather);
  conditionElement.textContent = weather.current.condition.text;
  locationElement.textContent = `${weather.location.name}, ${weather.location.country}`;
  tempElement.textContent = Math.round(weather.current.temp_c);
  feelsLikeElement.textContent = `Feels like: ${Math.round(weather.current.feelslike_c)}`;
  humidityElement.textContent = `Humidity: ${weather.current.humidity}%`;
  visibilityElement.textContent = `Visibility: ${weather.current.vis_km}km`;
}

async function fetchCurrentWeather(city) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`, { mode: 'cors' });
    const weather = await response.json();
    updateWeather(weather);
    errorMsg.style.display = 'none';
  } catch (error) {
    errorMsg.style.display = 'block';
  }
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  location = searchBar.value;
  fetchCurrentWeather(location);
  searchBar.value = '';
});

fetchCurrentWeather(location);

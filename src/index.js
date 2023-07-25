import './style.css';

const searchBar = document.getElementById('search-bar');
const submitBtn = document.getElementById('submit-btn');
const key = '77c6d40a83274e6ab4b144221231907';
let location = 'toronto';

async function fetchCurrentWeather(city) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`, { mode: 'cors' });
    const weather = await response.json();
    console.log(weather);
    console.log(weather.current.condition.text);
    console.log(`${weather.location.name}, ${weather.location.country}`);
    console.log(weather.current.temp_c);
    console.log(`Feels like: ${weather.current.feelslike_c}`);
    console.log(`Humidity: ${weather.current.humidity}%`);
    console.log(`Visibility: ${weather.current.vis_km}km`);
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  location = searchBar.value;
  fetchCurrentWeather(location);
  searchBar.value = '';
});

fetchCurrentWeather(location);

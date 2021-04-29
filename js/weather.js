// weather information from https://openweathermap.org/
// weather icons downloaded from https://www.amcharts.com/free-animated-svg-weather-icons/

const icon = document.querySelector(".js-weather__icon");
const temperature = document.querySelector(".js-weather__temperature");
const place = document.querySelector(".js-weather__place");

const WEATHER_API_KEY ="0f42b967f617ff0df8398e0696f140d1";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .then(response => response.json())
    .then(json => {
        temperature.innerText = `${Math.floor(json.main.temp)}°`;
        place.innerText = json.name;
        icon.src = `svg/animated/${json.weather[0].icon}.svg`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Couldn't access geo-location.")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
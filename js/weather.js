const apiKey = '862c70e380cf5f9e19a3425c76609dbb';
const latitude = '-34.629060';
const longitude =  '-68.338872';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


fetch(URL).then(resp => resp.json())
          .then((weather) => {
            console.log(weather);
            updateWeatherCard(weather);
          })


function updateWeatherCard(weather) {
    const tempHTML = document.getElementById('weather-temp')
    const nameHTML = document.getElementById('weather-name')
    const iconHTML = document.getElementById('weather-icon')

    nameHTML.innerText = weather.name;
    tempHTML.innerHTML = `${weather.main.temp} <span>°C</span>`
    iconHTML.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" />`
}
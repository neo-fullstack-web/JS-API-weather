const apiKey = '862c70e380cf5f9e19a3425c76609dbb';
// let latitude = '-34.629060';
// let longitude =  '-68.338872';
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const weatherInput = document.getElementById('weather-search');

// searchWeatherCity();

//Obtener latitude & longitude con la api de navigator.geolocation
(function getGeolocation() {
    console.log(navigator.geolocation)
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (data) => {
                console.log(data);
                latitude = data.coords.latitude;
                longitude = data.coords.longitude;
                searchWeatherCity();
            },
            (error) => {
                console.log(error)
            }
        )
    }
})()

function updateWeatherCard(weather) {
    const tempHTML = document.getElementById('weather-temp')
    const nameHTML = document.getElementById('weather-name')
    const iconHTML = document.getElementById('weather-icon')

    nameHTML.innerText = weather.name;
    tempHTML.innerHTML = `${weather.main.temp} <span>°C</span>`
    iconHTML.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" />`
}

//Listener del evento de presionar teclas, esperando que la key sea enter para llamar a la función search city
weatherInput.addEventListener('keyup', (evt) => evt.key === 'Enter' ?  searchWeatherCity(evt.target.value) : null);


//
function searchWeatherCity(city) {
    const params = city ? `&q=${city}` : `&lat=${latitude}&lon=${longitude}`
    fetch(`${URL}${params}`).then(resp => resp.json())
          .then((weather) => {
            console.log(weather);
            if(weather.cod === '404') swal('Error', 'Ciudad no encontrada', 'error')
            updateWeatherCard(weather);
          })
}

function searchWeatherCityBtn() {
    const cityValue = weatherInput.value;
    searchWeatherCity(cityValue)
}
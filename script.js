const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_image = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

 async function checkWeather(city){
    const api_key = "234b11b45f84cab1e8295c66eb926e15";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then
    (response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Error");
        return;
    }


    weather_body.style.display = "flex";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}℃`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;


    switch(weather_data.weather[0].main){
        case 'clouds':
            weather_image.src = "main image.png";
        break;
        case 'Clear':
            weather_image.src = "clear.png";
        break;
        case 'Rain':
            weather_image.src = "rain.png";   
        break;                    
        case 'Mist':
            weather_image.src = "mist.png";
        break;
        case 'Snow':
            weather_image.src = "snow.png";
        break;
}

     console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
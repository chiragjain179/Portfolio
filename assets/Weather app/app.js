const apiKey = "9aaf8762ee5b5a8a33c4f7209f6f6f29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .btn");
const WeatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "ciouds") {
            WeatherIcon.src = "./images/clouds.png";
        }
        else if (data.weather[0].main == "clear") {
            WeatherIcon.src = "./images/clear.png"
        }
        else if (data.weather[0].main == "drizzle") {
            WeatherIcon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main == "mist") {
            WeatherIcon.src = "./images/mist.png"
        }
        else if (data.weather[0].main == "rain") {
            WeatherIcon.src = "./images/rain.png"
        }
        else if (data.weather[0].main == "clear") {
            WeatherIcon.src = "./images/snow.png"
        }


        document.querySelector(".Weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }


}


searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});
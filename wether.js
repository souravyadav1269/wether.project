async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Enter city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40f4893525502658bbe7158abead15c4&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod !== 200) {
        alert("City not found");
        return;
    }

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;
}
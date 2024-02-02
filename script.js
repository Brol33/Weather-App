// Make a GET request
fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&appid="
    + weather_api_key)
        .then(response)
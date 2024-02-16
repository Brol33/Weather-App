function search() {
    const cityName = document.getElementById("cityInput").value;
    const apiKey = '000dfe93adc5b676a65726ba484bfee6';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;
            const {main, icon} = data.weather[0];
            document.getElementById("temp").innerText = temp + "°C";
            document.getElementById("humidity").innerText = "Humidity " + humidity + "%";
            document.getElementById("wind").innerText = "Wind speed " + wind + "km/h";
            document.getElementById("description").innerText = main;
            document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.getElementById("weather").innerText = "Weather";
        })
    
};
document.querySelector("#cityInput").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        search();
    }
});

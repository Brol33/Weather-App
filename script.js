// Make a GET request

//document.querySelector("#location");
function search() {
    const cityName = document.getElementById("cityInput").value;
    const apiKey = '000dfe93adc5b676a65726ba484bfee6';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const temp = data.main.temp
            document.getElementById("weatherInfo").innerText = temp + " degrees celcius"
        })
    
};




const api_key = "b8cc80859e947ab647c586cd20ab2dc8";

async function getData(lat, lon){
    let city = document.getElementById('city').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` // City wise Weather details
    
    try{
        let res = await fetch(url);

        let data = await res.json();
        console.log(data);
        append(data);
       
    }catch(err){
        console.log(err);
    }
}
function append(data){
    let container = document.getElementById("container");
    container.innerHTML = null;

    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;

    let min = document.createElement("p");
    min.innerText = `Min temp: ${data.main.temp_min}`;

    let max = document.createElement("p");
    max.innerText = `Max temp: ${data.main.temp_max}`;

    let current = document.createElement("p");
    current.innerText = `Current Temp: ${data.main.temp}`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${data.main.humidity}`;

    let wind_speed = document.createElement("p");
    wind_speed.innerText = `Wind Speed: ${data.wind.speed}`;

    container.append(city, min, max, current, humidity, wind_speed)

    let iframe = document.getElementById('gmap_canvas');
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

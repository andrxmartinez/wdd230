const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg,us&units=imperial&appid=c515a57b84161fb3f31f685e290f0729"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        weather(jsObject);
        getWindChill(jsObject);
    });

function weather(jsObject){
    document.querySelector('#weather-temp').textContent = jsObject.main.temp;
    const iconsrc = `http://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed;

}

function getWindChill(jsObject) {
    let temperature = document.querySelector('#weather-temp');
    let windspeed = document.querySelector('#wind-speed');
    let windChill = document.querySelector('#wind-chill');
    
    temperature = jsObject.main.temp;
    windspeed = jsObject.wind.speed;

    if (temperature > 50 || windspeed < 3) {
        windChill.textContent = "N/A"
    } else {
        let chill = Math.round(35.74 + (0.6215 * temperature)-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temperature*Math.pow(windspeed,0.16)));
        windChill.textContent = `${chill}°F`
    }
}

// 35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16))





// let t = document.querySelector("#temp").textContent;
// let s = document.querySelector("#wind-speed").textContent;

// let f = (35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16))

// windspeed = document.querySelector("#wind-speed");
// windchill = document.querySelector("#wind-chill");
// windspeed.innerHTML = s;
// windchill.innerHTML = Math.round(f * 100) / 100;
// console.log(windspeed) 
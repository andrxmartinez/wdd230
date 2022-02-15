let t = document.querySelector("#temp").textContent;
let s = document.querySelector("#wind-speed").textContent;

let f = (35.74 + (0.6215 * t))-(35.75 * Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16))

windspeed = document.querySelector("#wind-speed");
windchill = document.querySelector("#wind-chill");
windspeed.innerHTML = s;
windchill.innerHTML = Math.round(f * 100) / 100;
console.log(windspeed) 
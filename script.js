// 30d713a82ab035f6afc1e90d950c8e49

let apiKey = "30d713a82ab035f6afc1e90d950c8e49";
let URL =`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
function getWeather() {
  let city = $("#search-input").val()
  console.log(city)
}

$("#search-button").on("click", getWeather);

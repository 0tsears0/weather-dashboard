// 30d713a82ab035f6afc1e90d950c8e49

function getWeather() {
  let city = $("#search-input").val()
  console.log(city)
}

$("#search-button").on("click", getWeather);

// pasted apikey from weather site
// 30d713a82ab035f6afc1e90d950c8e49

// declared and set apikey to apiKey variable
let apiKey = "30d713a82ab035f6afc1e90d950c8e49";

// created function getWeather
function getWeather() {
// empties #weather-wrapper's value after click
  $('#weather-wrapper').empty()
// empities #forecast-wrapper's value after click
  $('#forecast-wrapper').empty()
  // declared city variable to #search-input location and got value of search input
  let city = $("#search-input").val()
// declared URL variable and set value to api url. Switched units to imperial. 
  let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
// made get request from URL
  $.ajax({
    method: "GET",
    url: URL
// returned response
  }).then(function (response) {
    console.log(response)
    $("#search-input").val("")
// declared and set temp, humidity, windSpeed, and cityName to value from weather data
    let temp = response.main.temp
    let humidity = response.main.humidity
    let windSpeed = response.wind.speed
    let cityName = response.name
// declared cardDiv variable and created in-text html div
    let cardDiv = $('<div>')
// created card class and appended to #weather-wrapper location
    cardDiv.addClass('card').appendTo('#weather-wrapper')
// declared cardBody variable and created in-text html div
    let cardBody = $('<div>')
// created card class named card-body and appended: a city name  h2 tag (referencing cityName variable), current temp p tag(referencing temp variable), humidity p tag (referencing humidity variable), and wind speed p tag (referencing windSpeed variable).
    cardBody.addClass('card-body').append(
      `<h2>${cityName}</h2>
      <p>Current Temp: ${temp}F</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed}mph</p>
      `
// appended everything prior to cardDiv
    ).appendTo(cardDiv)
    
    fiveDayForecast(cityName);
  })
}

function fiveDayForecast(city) {
  console.log(city);

  // build queryUrl for forecast and pass in city
let fiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${apiKey}`
  // make ajax request
  $.ajax({
    method: "GET",
    url: fiveDay
    // inside of .then()
  }).then(function (weatherResponse) {
    // filter for just 5 days
    var fiveDayArr = weatherResponse.list.filter(function(weatherObj) {
      if (weatherObj.dt_txt.includes('06:00:00')) {
        return true;
      }
      else {
        return false;
      }
    });
    console.log(fiveDayArr)
// created for loop to run through 5 day values
    for (var i = 0; i < fiveDayArr.length; i++) {
      var date = fiveDayArr[i].dt_txt
      console.log(date)
      var temp = fiveDayArr[i].main.temp
      console.log(temp)
      var humidityFive = fiveDayArr[i].main.humidity
        console.log(humidityFive)
    }
})
  
}
// created click event for search-button which retrieves weather value from weather site
$("#search-button").on("click", getWeather);
var weatherApiKey = "3d63361c9306767144bfbbcb1a41ff1d";
var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";

var inputOption = document.querySelector(".stateInput");

async function checkWeatherToday(state) {
    var response = await fetch(weatherApiUrl + state + `&appid=${weatherApiKey}`);

    var data = await response.json();

    var lat = data.coord.lat;
    var lon = data.coord.lon;

    document.querySelector(".state").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "mph";

    checkFiveDay(state);

    document.querySelector("#todayWeather").classList.remove('is-hidden');

    document.querySelector("#fiveDay").classList.remove('is-hidden');


}

async function checkFiveDay(state) {
    var response = await fetch(fiveDayUrl + state + `&appid=` + weatherApiKey + `&cnt=5`);

    var fiveDayData = await response.json();

    console.log(fiveDayData)

    var humidity2 = document.querySelector('.humidity2')
    var temp2 = document.querySelector('.temp2')
    var wind2 = document.querySelector('.wind2')

    var dayTwoTemp = fiveDayData.list[0].main.temp;
    var dayTwoHumidity = fiveDayData.list[0].main.humidity;
    var dayTwoWind = fiveDayData.list[0].wind.speed;

    temp2.innerHTML = Math.round(dayTwoTemp) + "°F";
    humidity2.innerHTML = dayTwoHumidity + "%";
    wind2.innerHTML = Math.round(dayTwoWind) + "mph";

    var humidity3 = document.querySelector('.humidity3')
    var temp3 = document.querySelector('.temp3')
    var wind3 = document.querySelector('.wind3')

    var dayThreeTemp = fiveDayData.list[1].main.temp;
    var dayThreeHumidity = fiveDayData.list[1].main.humidity;
    var dayThreeWind = fiveDayData.list[1].wind.speed;

    temp3.innerHTML = Math.round(dayThreeTemp) + "°F";
    humidity3.innerHTML = dayThreeHumidity + "%";
    wind3.innerHTML = Math.round(dayThreeWind) + "mph";

    var humidity4 = document.querySelector('.humidity4')
    var temp4 = document.querySelector('.temp4')
    var wind4 = document.querySelector('.wind4')

    var dayFourTemp = fiveDayData.list[2].main.temp;
    var dayFourHumidity = fiveDayData.list[2].main.humidity;
    var dayFourWind = fiveDayData.list[2].wind.speed;

    temp4.innerHTML = Math.round(dayFourTemp) + "°F";
    humidity4.innerHTML = dayFourHumidity + "%";
    wind4.innerHTML = Math.round(dayFourWind) + "mph";

    var humidity5 = document.querySelector('.humidity5')
    var temp5 = document.querySelector('.temp5')
    var wind5 = document.querySelector('.wind5')

    var dayFiveTemp = fiveDayData.list[3].main.temp;
    var dayFiveHumidity = fiveDayData.list[3].main.humidity;
    var dayFiveWind = fiveDayData.list[3].wind.speed;

    temp5.innerHTML = Math.round(dayFiveTemp) + "°F";
    humidity5.innerHTML = dayFiveHumidity + "%";
    wind5.innerHTML = Math.round(dayFiveWind) + "mph";

    var humidity6 = document.querySelector('.humidity6')
    var temp6 = document.querySelector('.temp6')
    var wind6 = document.querySelector('.wind6')

    var daySixTemp = fiveDayData.list[4].main.temp;
    var daySixHumidity = fiveDayData.list[4].main.humidity;
    var daySixWind = fiveDayData.list[4].wind.speed;

    temp6.innerHTML = Math.round(daySixTemp) + "°F";
    humidity6.innerHTML = daySixHumidity + "%";
    wind6.innerHTML = Math.round(daySixWind) + "mph";

}

inputOption.addEventListener("change", function (event) {
    checkWeatherToday(`${event.target.value}`)
})

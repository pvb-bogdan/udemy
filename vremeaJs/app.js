// init weather obj
const weather = new Weather('Bucharest');

// weather.changeLocation('Boston');

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeatherDOM);
// wrap this grtWeather function in another function that will be called when DOM is loaded
function getWeatherDOM(){
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}

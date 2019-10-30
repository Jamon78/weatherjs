// Init weather object

const weather = new Weather('Helsinki', 'fi');

// Get weather on Dom load
//weather.changeLocation('kerava', 'fi');
// document.addEventListener('DOMContentLoaded', getWeather);

weather
  .getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));

function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return 'below absolute zero (0 K)';
  } else {
    let myCelsius = 0;
    myCelsius = Math.round(kelvin - 273.15);
    return myCelsius;
  }
}

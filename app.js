// Init Storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

// Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather());

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display Weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return 'below absolute zero (0 K)';
  } else {
    let myCelsius = 0;
    myCelsius = Math.round(kelvin - 273.15);
    return myCelsius;
  }
}

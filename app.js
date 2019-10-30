// Init weather object

const weather = new Weather('Helsinki', 'fi');

weather
  .getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));

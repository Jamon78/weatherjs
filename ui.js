class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    //this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    //this.feelsLike = document.getElementById('w-feels-like');
    //this.dewpoint = document.getElementById('w-dewpoint');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.windDirection = document.getElementById('w-wind-direction');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${convertKelvinToCelsius(
      weather.main.temp
    )}\u00B0C`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} mps`;
    this.windDirection.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
  }
}

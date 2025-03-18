
// Repository for fetching weather data from the OpenWeather API

const axios = require("axios");
require("dotenv").config({ path: "./.env" });

class WeatherRepository {
  constructor() {
    this.apiKey = process.env.WEATHER_API_KEY;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  }

  async fetchWeatherData(lat, lon) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: { lat, lon, appid: this.apiKey, units: "metric" },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Weather API request failed: ${error.message}`);
    }
  }
}

module.exports = WeatherRepository;
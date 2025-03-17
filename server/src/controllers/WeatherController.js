const logger = require("../config/logger");

class WeatherController {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  async fetchWeather(req, res) {
    try {
      const { lat, lon } = req.query;

      if (!lat || !lon) {
        logger.warn("Bad Request: Missing latitude or longitude");
        return res.status(400).json({ error: "Latitude and Longitude are required" });
      }

      const weatherData = await this.weatherService.getWeather(lat, lon);
      res.json(weatherData);
    } catch (error) {
      logger.error(`Failed to fetch weather data: ${error.message}`);
      res.status(500).json({ error: "Failed to fetch weather data." });
    }
  }
}

module.exports = WeatherController;

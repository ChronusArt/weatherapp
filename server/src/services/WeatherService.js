
// Weather service implementation, fetching weather data from the repository and handling errors.

const IWeatherService = require("../interfaces/IWeatherService");
const logger = require("../config/logger");

class WeatherService extends IWeatherService {
  constructor(repository) {
    super();
    this.repository = repository;
  }

  async getWeather(lat, lon) {
    if (!lat || !lon) {
      logger.warn("Latitude and Longitude are required");
      throw new Error("Latitude and Longitude are required");
    }

    try {
      logger.info(`Fetching weather for lat:${lat}, lon:${lon}`);
      const data = await this.repository.fetchWeatherData(lat, lon);
      logger.info("Weather data fetched successfully.");
      return data;
    } catch (error) {
      logger.error(`Failed to fetch weather data: ${error.message}`);
      throw new Error("Failed to fetch weather data.");
    }
  }
}

module.exports = WeatherService;

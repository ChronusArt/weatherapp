class IWeatherService {
  async getWeather(lat, lon) {
    throw new Error("getWeather method must be implemented");
  }
}

module.exports = IWeatherService;
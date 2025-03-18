
// Test suite for WeatherService using a mocked repository 

const WeatherService = require("../services/WeatherService");

const mockRepository = {
  fetchWeatherData: jest.fn().mockResolvedValue({ main: { temp: 25 } }),
};

describe("WeatherService", () => {
  let weatherService;

  beforeEach(() => {
    weatherService = new WeatherService(mockRepository);
  });

  test("should fetch weather data", async () => {
    const data = await weatherService.getWeather(7.4478, 125.8072);
    expect(data.main.temp).toBe(25);
  });

  test("should throw error if lat/lon is missing", async () => {
    await expect(weatherService.getWeather(null, null)).rejects.toThrow("Latitude and Longitude are required");
  });
});

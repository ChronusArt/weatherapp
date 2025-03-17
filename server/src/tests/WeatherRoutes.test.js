const request = require("supertest");
const app = require("../app");

jest.mock("../services/WeatherService", () => {
  return jest.fn().mockImplementation(() => ({
    getWeather: jest.fn().mockResolvedValue({ main: { temp: 30 } }),
  }));
});

describe("Weather API", () => {
  test("should return weather data", async () => {
    const response = await request(app).get("/api/weather?lat=7.4478&lon=125.8072");
    expect(response.statusCode).toBe(200);
    expect(response.body.main.temp).toBe(30);
  });

  test("should return 400 error for missing parameters", async () => {
    const response = await request(app).get("/api/weather");
    expect(response.statusCode).toBe(400);
  });
});

const express = require("express");
const WeatherRepository = require("../repositories/WeatherRepository");
const WeatherService = require("../services/WeatherService");
const WeatherController = require("../controllers/WeatherController");

const router = express.Router();
const repository = new WeatherRepository(); // ✅ Inject repository
const service = new WeatherService(repository); // ✅ Inject service
const controller = new WeatherController(service); // ✅ Inject controller

router.get("/", (req, res) => controller.fetchWeather(req, res));

module.exports = router;

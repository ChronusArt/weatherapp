
// Router setup for weather endpoints, connecting controller, service, and repository 

const express = require("express");
const WeatherRepository = require("../repositories/WeatherRepository");
const WeatherService = require("../services/WeatherService");
const WeatherController = require("../controllers/WeatherController");

const router = express.Router();
const repository = new WeatherRepository();
const service = new WeatherService(repository); 
const controller = new WeatherController(service); 

router.get("/", (req, res) => controller.fetchWeather(req, res));

module.exports = router;

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const weatherRoutes = require("./routes/WeatherRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/weather", weatherRoutes);

module.exports = app;
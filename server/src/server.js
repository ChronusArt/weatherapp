require("dotenv").config({ path: "./.env" });
console.log("API Key from .env:", process.env.WEATHER_API_KEY);
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
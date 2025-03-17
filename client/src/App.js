import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { motion } from 'framer-motion';
import './App.css'

import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

const App = () => {
  
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef(null);
  const [coordinates, setCoordinates] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [125.8072, 7.4478],
      zoom: 10.12
    });

    mapRef.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      setCoordinates({ lng, lat });
      setShowWeather(true);

      if (markerRef.current) {
        markerRef.current.remove();
      }
      
      markerRef.current = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([lng, lat])
        .addTo(mapRef.current);

        try {
          const response = await axios.get(`${WEATHER_API}?lat=${lat}&lon=${lng}`);
          setWeather(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
    
    });

    return () => mapRef.current.remove();
  }, []);

  
/*   console.log("Mapbox Token:", MAPBOX_TOKEN);

  const [marker, setMarker] = useState({ latitude: 7.4478, longitude: 125.8072 });
  const [weather, setWeather] = useState(null);

  const handleMapClick = async (event) => {
    const { lng, lat } = event.lngLat;
    setMarker({ latitude: lat, longitude: lng });

    try {
      const response = await axios.get(`${WEATHER_API}?lat=${lat}&lon=${lng}`);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }; */

  return (
    <div className="relative w-screen h-screen flex flex-col md:flex-row">
    {/* Map Container */}
    <div ref={mapContainerRef} className="absolute top-0 left-0 w-full h-full" />

    {/* Top-left: Instructions */}
    <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md text-xs font-bold
                    md:top-4 md:w-auto w-full text-center">
      Click a location on the map to display weather details.
    </div>

    {/* Top-right: Coordinates (Moves below instructions on small screens) */}
    {coordinates && (
      <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md text-sm
                      md:top-4 md:right-4 md: mt-12 md:left-auto md:w-auto w-full text-center">
        {`Longitude: ${coordinates.lng.toFixed(4)}, Latitude: ${coordinates.lat.toFixed(4)}`}
      </div>
    )}

    {/* Bottom-right: Weather Details (Moves below coordinates on small screens) */}
    {showWeather && (
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-4 right-4 bg-white/80 px-4 py-2 mb-12 rounded-lg shadow-md text-sm flex items-center justify-center
        md:bottom-4 md:right-4 md:mt-4 md:w-auto w-full text-center">
           {weather ? (
              <div>
                  <div className="flex space-x-2">
                    <p className="font-bold">Location:</p>
                    <p>{weather.name}</p>
                  </div>
                <p className="font-bold mt-2 text-base">Weather Details:</p>
                  <div className="flex space-x-2">
                    <p className="font-bold">Condition: </p>
                    <p>{weather.weather[0].description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold">Temperature:</p>
                    <p>{weather.main.temp}°C</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold">Humidity: </p>
                    <p>{weather.main.humidity}%</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-bold">Wind: </p>
                    <p>Speed: {weather.wind.speed}m/s, Gust: {weather.wind.gust}m/s</p>
                  </div>
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
      </motion.div>
    )}

    {/* Bottom-left: Developer Info (Moves to bottom on small screens) */}
    <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-lg shadow-md text-sm
                    md:bottom-4 md:left-4 md:mt-4 md:w-auto w-full text-center">
      <span className="font-bold">Developed by:</span> J-Archer Branzuela
    </div>
  </div>
/*     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold my-4">Weather Finder</h1>
      <Map
        initialViewState={{ latitude: 7.4478, longitude: 125.8072, zoom: 10 }}
        style={{ width: "100%", height: "500px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleMapClick}
      >
        <Marker latitude={marker.latitude} longitude={marker.longitude} color="red" />
      </Map>
      {weather && <p>Temperature: {weather.main.temp}°C</p>}
    </div> */
  );
};

export default App;
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function WeatherPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { lat, lon, name, state, country } = location.state || {};

  useEffect(() => {
    if (!lat || !lon) {
      navigate("/");
      return;
    }

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
        );
        setWeather(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch weather data. Please try again.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon, navigate]);

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-500">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">{error}</div>
          <button
            onClick={() => navigate("/")}
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            ← Back to search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400 transform transition-all duration-300 hover:shadow-xl">
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          ← Back to search
        </button>
        
        {weather && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                {name}
                {state && <span>, {state}</span>}
                {country && <span>, {country}</span>}
              </h1>
              <p className="text-gray-500 mt-1">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={getWeatherIcon(weather.weather[0].icon)}
                alt={weather.weather[0].description}
                className="w-32 h-32 transform transition-all duration-500 hover:scale-110"
              />
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-gray-800 mb-2">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="text-xl text-gray-600 capitalize">
                {weather.weather[0].description}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-gray-500">Feels Like</div>
                <div className="text-2xl font-semibold text-gray-800">
                  {Math.round(weather.main.feels_like)}°C
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-gray-500">Humidity</div>
                <div className="text-2xl font-semibold text-gray-800">
                  {weather.main.humidity}%
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-gray-500">Wind Speed</div>
                <div className="text-2xl font-semibold text-gray-800">
                  {Math.round(weather.wind.speed * 3.6)} km/h
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-gray-500">Pressure</div>
                <div className="text-2xl font-semibold text-gray-800">
                  {weather.main.pressure} hPa
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

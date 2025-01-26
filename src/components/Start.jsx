// Start.jsx
import searchIcon from "/Images/search.png";
import weatherImage from "/Images/clouds-and-sun.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCities = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
      );
      
      if (response.data.length === 0) {
        setError("No cities found. Please try a different search.");
        setCities([]);
      } else {
        setCities(response.data);
      }
    } catch (err) {
      setError("Failed to fetch cities. Please try again.");
      setCities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchCities();
    }
  };

  const handleCitySelect = (city) => {
    navigate("/weather", { 
      state: { 
        lat: city.lat, 
        lon: city.lon, 
        name: city.name,
        country: city.country,
        state: city.state
      } 
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400 transform transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center flex-col">
          <img 
            src={weatherImage} 
            alt="Weather" 
            className="w-60 h-60 transform transition-all duration-500 hover:scale-105" 
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Simple Weather</h1>
          <p className="mb-5 text-gray-500">
            Enter a city name to get the weather
          </p>
          <div className="relative w-full">
            <img
              src={searchIcon}
              alt="search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your city"
              className="border-2 rounded-md pl-9 w-full py-2 text-gray-500 focus:outline-none focus:border-blue-400 transition-all duration-300"
            />
            <button
              onClick={searchCities}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Search
            </button>
          </div>

          {loading && (
            <div className="mt-4 text-gray-500 animate-pulse">
              Searching...
            </div>
          )}

          {error && (
            <p className="mt-4 text-red-500 animate-fade-in">
              {error}
            </p>
          )}

          {cities.length > 0 && (
            <div className="mt-4 w-full">
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li
                    key={`${city.lat}-${city.lon}`}
                    className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-md"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city.name}
                    {city.state ? `, ${city.state}` : ""}
                    {city.country ? `, ${city.country}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

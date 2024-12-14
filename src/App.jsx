// App.jsx
import React, { useState } from 'react';
import StartPage from "./components/Start.jsx";
import WeatherPage from "./components/Weather.jsx";

function App() {
  const [showWeatherPage, setShowWeatherPage] = useState(false);
  const [city, setCity] = useState(''); // State to hold the city name

  function updateWeatherPage() {
    setShowWeatherPage(!showWeatherPage);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      {showWeatherPage ? (
        <WeatherPage city={city} /> 
      ) : (
        <StartPage updateWeatherPage={updateWeatherPage} setCity={setCity} /> 
      )}
    </div>
  );
}

export default App;
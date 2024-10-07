import StartPage from"./components/Start.jsx"
import WeatherPage from "./components/Weather.jsx";
import { useState } from "react";

function App() {
  const [showWeatherPage, setShowWeatherPage] = useState(false);

  function updateWeatherPage() {
    setShowWeatherPage(!showWeatherPage);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      {showWeatherPage ? (
        <WeatherPage />
      ) : (
        <StartPage updateWeatherPage={updateWeatherPage} />
      )}
    </div>
  );
}

export default App;

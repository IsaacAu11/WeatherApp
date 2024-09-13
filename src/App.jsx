import StartPage from "./components/startPage";
import WeatherPage from "./components/weatherPage";
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

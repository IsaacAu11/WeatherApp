// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from "./components/Start.jsx";
import WeatherPage from "./components/Weather.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
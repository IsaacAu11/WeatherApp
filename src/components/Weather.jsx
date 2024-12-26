<<<<<<< HEAD
import { data } from "autoprefixer";
import { useEffect, useState } from "react";

export default function WeatherPage() {
=======
import { useEffect } from "react";

function GetWeatherData(city) {
  const apiKey = '30f23130ada3d69eb69956b07a6fce2b';
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&country=GB&limit=3&appid=${apiKey}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export default function WeatherPage({ city }) {
  useEffect(() => {
    if (city) {
      GetWeatherData(city); // Fetch weather data when city changes
    }
    console.log("1")
  }, [city]); // Dependency array to run effect when city changes
>>>>>>> 6e37c459126f3ee570837e106b1c67ff2eec4c85

  return (
    <div className="h-screen flex items-center justify-center w-screen">
      <div className="max-w-lg w-full h-2/3 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400">
<<<<<<< HEAD

=======
        <h2>Weather for {city}</h2>
        {/* Additional weather information can be displayed here */}
>>>>>>> 6e37c459126f3ee570837e106b1c67ff2eec4c85
      </div>
    </div>
  );
}

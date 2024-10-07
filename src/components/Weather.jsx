import { data } from "autoprefixer";
import { useEffect, useState } from "react";

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.7517&longitude=0.3952&hourly=temperature_2m",
);

function GetWeatherData(city) {
  const apiKey = '30f23130ada3d69eb69956b07a6fce2b';
  const url = "http://api.openweathermap.org/geo/1.0/direct?q={city}&country=GB&limit=3&appid={apiKey}"

  return fetch(url)
  .then(
    console.log(data)
  )
}

export default function WeatherPage() {

  return (
    <div className="h-screen flex items-center justify-center w-screen">
      <div className="max-w-lg w-full h-2/3 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400">
        <button
              className="h-10 w-10 bg-gray-500 border-stone-300 border-2 "
              onClick={() => GetWeatherData('London')}
            ></button>
      </div>
    </div>
  );
}

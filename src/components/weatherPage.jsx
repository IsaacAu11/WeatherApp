import { useEffect, useState } from "react";

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.7517&longitude=0.3952&hourly=temperature_2m",
);

export default function WeatherPage() {
  return (
    <div className="h-screen flex items-center justify-center w-screen">
      <div className="max-w-lg w-full h-2/3 bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400"></div>
    </div>
  );
}

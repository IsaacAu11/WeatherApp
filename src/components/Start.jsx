import searchIcon from "/Images/search.png";
import weatherImage from "/Images/clouds-and-sun.png";
import { useState } from "react";

export default function StartPage({ updateWeatherPage }) {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);

  const handleWeatherClick = () => {
    updateWeatherPage();
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400">
      <div className="flex items-center flex-col">
        <img src={weatherImage} alt="Cloud" className="w-60 h-60" />
        <p className="mb-5 font-inria text-gray-500">
          Welcome to Simple Weather
        </p>
        <div className="relative">
          <img
            src={searchIcon}
            alt="search"
            className="absolute left-2 top-1 w-5 h-5 z-10"
          />
          <button
            className="absolute left-1 top-0 w-8 h-7 z-20"
            onClick={() => getWeatherData(val)}
          ></button>
          <input
            type="text"
            placeholder="Enter your city"
            className="border-2 rounded-md pl-9 w-96 text-gray-500"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              console.log(val);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeatherData(val);
              }
            }}
          />
        </div>
      </div>
    </div>
  );

  function getWeatherData(city) {
    const apiKey = `30f23130ada3d69eb69956b07a6fce2b`;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&country=GB&limit=3&appid=${apiKey}`
  
    fetch(url)
      .then( response =>{
        console.log('Response: ',response);
        response.json()
      }
      ).then(data => {
        console.log('Data: ',data)
        data => setData(data)
      }
      )
    return(
      <>

      </>
    )
  }
}

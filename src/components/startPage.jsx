import React, { useState } from 'react';
import searchIcon from '/Images/search.png';
import weatherImage from '/Images/clouds-and-sun.png';
import WeatherPage from './weatherPage';

export default function StartPage() {
  const [showWeatherPage, setShowWeatherPage] = useState(false);

  const handleButtonClick = () => {
    setShowWeatherPage(true);  
  };

  if (showWeatherPage) {
    return <WeatherPage />; 
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400'>
        <div className='flex items-center flex-col'>
          <img src={weatherImage} alt='Cloud' className='w-60 h-60' />
          <p className='mb-5 font-inria text-gray-500'>Welcome to Simple Weather</p>
          <div className='relative'>
            <img src={searchIcon} alt='search' className='absolute left-2 top-1 w-5 h-5 z-10' />
            <button
              className='absolute left-1 top-0 w-8 h-7 z-20'
              onClick={handleButtonClick}  
            >
            </button>
            <input type="text" placeholder='Enter your city' className='border-2 rounded-md pl-9 w-96 text-gray-500' />
          </div>
        </div>
      </div>
    </div>
  );
}

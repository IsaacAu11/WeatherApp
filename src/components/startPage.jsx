import searchIcon from '/Images/search.png';
import weatherImage from '/Images/clouds-and-sun.png';
import { useState } from 'react';

export default function StartPage({updateWeatherPage}) {

    const [val,setVal] = useState("")

    const handleWeatherClick = () => {
        updateWeatherPage()
    }

    const handlerFunction = () =>{
        {handleWeatherClick()}
    }

  return (
    <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400'>
        <div className='flex items-center flex-col'>
            <img src={weatherImage} alt='Cloud' className='w-60 h-60' />
            <p className='mb-5 font-inria text-gray-500'>Welcome to Simple Weather</p>
            <div className='relative'>
                <img src={searchIcon} alt='search' className='absolute left-2 top-1 w-5 h-5 z-10' />
                <button
                className='absolute left-1 top-0 w-8 h-7 z-20'
                onClick={() => handleWeatherClick()}
                >
                </button>
                <input 
                type="text" 
                placeholder='Enter your city' 
                className='border-2 rounded-md pl-9 w-96 text-gray-500' 
                value={val}
                onChange={e => {
                    setVal(e.target.value)
                    console.log(val)
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handlerFunction();
                    }
                }}/>
            </div>
        </div>
    </div>
  );
}



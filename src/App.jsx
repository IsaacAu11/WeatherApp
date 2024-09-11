import './App.css'
import './index.css'
import searchIcon from '/Images/search.png'
import weatherImage from '/Images/clouds-and-sun.png'


function App() {

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600'>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400'>
        <div className='flex items-center flex-col'>
          <img src={weatherImage} alt='Cloud' className='w-60 h-60'></img>
          <p className='mb-5 font-inria text-gray-500'>Welcome to Simple Weather</p>
          <div className='relative'>
            <button className='w-8 h-6 absolute'></button>
            <img src={searchIcon} alt="search" className='w-5 h-5 absolute left-2 bottom-1 top-1'/>
            {/*<img src={weatherIcon} alt="Search"className='w-5 h-5 absolute left-2 bottom-2 top-1'/>*/}
            <input type="text" placeholder='Enter your city' className='border-2 rounded-md pl-9 w-96 text-gray-500'/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

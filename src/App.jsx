import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg border-2 border-blue-400">
        <h1>Weather app</h1>
        <p className='text-10xl font-bold text-red-300'>Welcome to this simple weather app</p>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default App

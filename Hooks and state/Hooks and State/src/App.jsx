import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setvalue] = useState(0)

  return (
    <>
    <div>
      <p>Hello the count is {count}</p>
      <button onClick={()=>{setvalue(count+1)}}>Count</button>
    </div>

    </>
  )
}

export default App

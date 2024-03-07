import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-400 rounded-xl text-black'>Tailwind test</h1>
<br></br>
<Card name = "Hitesh Chaudhery" work = "Youtuber,Software Engineer"/>
<Card name = "Mohit Pandey" work = "Student,Web Developer"/>
    </>
  )
}

export default App

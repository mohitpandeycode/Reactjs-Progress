import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className='w-full h-screen m-0 p-0' style={{backgroundColor:color}}>
      <div className='bg-white flex flex-wrap rounded-xl p-2 gap-4 bottom-5 fixed'>
        <button onClick={()=>setColor("red")} className='bg-red-500 text-white rounded-2xl p-2'>Red</button>
        <button onClick={()=>setColor("blue")} className='bg-blue-500 text-white rounded-2xl p-2'>Blue</button>
        <button onClick={()=>setColor("green")} className='bg-green-500 text-white rounded-2xl p-2'>Green</button>
        <button onClick={()=>setColor("pink")} className='bg-pink-700 text-white rounded-2xl p-2'>Pink</button>
        <button onClick={()=>setColor("purple")} className='bg-purple-700 text-white rounded-2xl p-2'>Purple</button>
        <button onClick={()=>setColor("brown")} className='bg-red-900 text-white rounded-2xl p-2'>Brown</button>
        <button onClick={()=>setColor("black")} className='bg-black text-white rounded-2xl p-2'>Black</button>
        <button onClick={()=>setColor("yellow")} className='bg-yellow-500 text-white rounded-2xl p-2'>Yellow</button>
        <button onClick={()=>setColor("aqua")} className='bg-blue-500 text-white rounded-2xl p-2'>aqua</button>
      </div>
      
    </div>
  )
}

export default App

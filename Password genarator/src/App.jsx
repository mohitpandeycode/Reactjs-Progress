import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")
  const [btnText, setBtnText] = useState("Copy")
  const passwordRef = useRef(null)

  let passwordGenarator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) {
      str+="1234567890"
    }
    if (charallowed) {
      str+="!@#$%^&-_;?+~`"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numallowed,charallowed,setPassword])

  useEffect(()=>{
    passwordGenarator()
  },[length,numallowed,charallowed,passwordGenarator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
      setBtnText("copied")
  }, [password])
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard} 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >{btnText}</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={4}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultValue={numallowed}
          onChange={()=>setNumallowed((prev)=> !prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultValue={charallowed}
              onChange={()=>setCharallowed((prev)=> !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App

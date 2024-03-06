# React + Vite
## hooks and State
- in hooks and state we have the page like that 
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setvalue] = useState(0)

  return (
    <>
    <div>
      Hello the count is
    </div>

    </>
  )
}

export default App
```
- So first import use state like that:
```
import { useState } from 'react'
```
- so then make a function like that:
```
function function_name() {
  const [variable , return_function_name] = useState(value)

#just like...

function App() {
  const [count , setvalue] = useState(0)
```
- And after that in return function make a function for the use state:
```
 return (
    <>
    <div>
      <p>Hello the count is {count}</p>
      <button onClick={()=>{setvalue(count+1)}}>Count</button>
    </div>

    </>
  )
}
```

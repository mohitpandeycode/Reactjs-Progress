import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import TextBox from './components/TextBox'
import Alert from './components/Alert'


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

let ShowAlert=(message, type) =>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
};

let toggleMode = ()=> {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0a1433";
      ShowAlert("Dark Mode Enabled",'success')
      
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Enabled",'success')
    }
}
  return (
    <>
    <Navbar mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <TextBox mode={mode} alert = {ShowAlert}/>
    </>
  )
}

export default App

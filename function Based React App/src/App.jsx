import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/navbar'
import TextBox from './Components/TextBox'
import Alert from './Components/Alert'
import About from './Components/About'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let ShowAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a1433";
      ShowAlert("Dark Mode Enabled", 'success')

    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Enabled", 'success')
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextBox mode={mode} alert={ShowAlert} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

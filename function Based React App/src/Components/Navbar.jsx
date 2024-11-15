import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    let setRed = ()=>{
        if (document.body.style.backgroundColor != "white" || document.body.style.backgroundColor === "white"){
            document.body.style.backgroundColor = 'red'
        }else{
            document.body.style.backgroundColor = 'white'
        }
    }
    let setGreen = ()=>{
        if (document.body.style.backgroundColor != "white" || document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = 'green'
        }else{
            document.body.style.backgroundColor = 'white'
        }
    }
    let setBlue = ()=>{
        if (document.body.style.backgroundColor != "white" || document.body.style.backgroundColor == "white" ){
            document.body.style.backgroundColor = 'aqua'
        }else{
            document.body.style.backgroundColor = 'white'
        }
    }
    let setYellow = ()=>{
        if (document.body.style.backgroundColor != "white" || document.body.style.backgroundColor == "white"){
            document.body.style.backgroundColor = 'yellow'
        }else{
            document.body.style.backgroundColor = 'white'
        }
    }
  
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TextUtills</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" activeClassName="active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" activeClassName="active">About</Link>
                            </li>
                        </ul>
                        <div className="my-2">
                            <span onClick={setRed} className="dot bg-danger"></span>
                            <span onClick={setGreen} className="dot bg-success"></span>
                            <span onClick={setBlue} className="dot bg-info"></span>
                            <span onClick={setYellow} className="dot bg-warning"></span>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
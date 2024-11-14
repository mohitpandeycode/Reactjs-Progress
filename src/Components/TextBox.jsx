import React, { useState } from 'react'


function TextBox(props) {
const [Text, setText] = useState("Enter the text here...")
const [copyBtn, setcopyBtn] = useState('Copy Text')
const [colorBtn, setcolorBtn] = useState('primary')

let HandleOnClick = ()=>{
    let newtext = Text.toUpperCase()
    setText(newtext)
    setcopyBtn("Copy Text")
    setcolorBtn("primary")
    props.alert("Converted to uppercase","success")
}
let Handlelower = ()=>{
    let newtext = Text.toLowerCase()
    setText(newtext)
    setcopyBtn("Copy Text")
    setcolorBtn("primary")
    props.alert("Converted to Lowercase","success")
}

let HandleCopy = ()=>{
    navigator.clipboard.writeText(Text)
    setcopyBtn("Copied")
    setcolorBtn("success disabled")
    props.alert("Text copied","success")

}

let HandleOnChange = (e)=>{
    setText(e.target.value)
    setcopyBtn("Copy Text")
    setcolorBtn("primary")
}
let clickbox = (e)=>{
    if (e.target.value == "Enter the text here..."){
        setText("")
    }
}

    return (
        <>
            <div className={`container mt-3 text-${props.mode === 'light' ?'dark':'light'}`}>
                <h1 className='mb-3' >Lets Make the Text Change!</h1>
                <textarea className="form-control" 
                style={{backgroundColor : props.mode==="dark"?'#0a1433':'white', 
                color:props.mode==="dark"?'white':'black'}} onChange={HandleOnChange} onClick={clickbox} value={Text} rows="8"></textarea>
                <button type="button" onClick={HandleOnClick} className="btn btn-primary m-2 btn-lg">Upper case</button>
                <button type="button" onClick={Handlelower} className="btn btn-primary m-2 btn-lg">Lower case</button>
                    {Text === "" || Text === "Enter the text here..."?null:
                (<button type="button" onClick={HandleCopy} className={`btn btn-${colorBtn} m-2 btn-lg`}>{copyBtn}</button>
)}
            </div>

            <div className={`container my-3 text-${props.mode === 'light' ?'dark':'light'}`}>
                <h3>Your text summary</h3>
                <p><b>{Text!= "" ?Text.split(" ").length:0} </b>Words and <b>{Text.length} </b>Characters</p>
            </div>
        </>
    )
}

export default TextBox

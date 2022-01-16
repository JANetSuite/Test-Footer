import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setMyText] = useState('Enter text here');
    const handleUpClick = () =>{
        let mytext=text.toUpperCase();
        setMyText(mytext);
        props.showAlert("UpperCase is converted!","success");
    }
    const handleLoClick = () =>{
        let mytext=text.toLowerCase();
        setMyText(mytext);
    }
    const handleClick = () =>{
        let mytext="";
        setMyText(mytext);
        props.showAlert("Text is Cleared!","success");
    }
    const handleOnChange = (event) =>{
        setMyText(event.target.value);
    }
   
    return (
        <>
        <div className="container my-3">
            <h1 className='my-3'>Enter the text to analyze below</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            <div className='my-3'>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>

            <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>

            <button type="button" className="btn btn-primary mx-1" onClick={handleClick}>Clear text</button>
            </div>
            </div> 
        </div>
        <div className="container my-3">
            <h2 >Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

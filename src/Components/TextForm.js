import React, { useState } from 'react';

export default function TextForm(props) {

    const upper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const lower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
      const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
   
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
        const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
  
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    // const color = document.getElementById('color');
    // const box = document.getElementById('box');
    // box.style.color = 'salmon';

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`} >

                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder="Enter Text Here" onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={upper}>convert to uppercase</button>
                <button className="btn btn-success mx-2" onClick={lower}>convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
               <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

            </div>

            <div className={`continer text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <p>  {text.split(" ").length} words </p>
                <p> {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} minutes to read </p>
                <p> {text.length > 0 ? text : 'write somthing for preview'}</p>
            </div>
        </>
    )
}

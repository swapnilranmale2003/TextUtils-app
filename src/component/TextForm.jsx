import React, { useState } from "react";
export default function TexthtmlForm(props) {
  const handleUpClick = () => {
    console.log("handleUpClick Clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLwClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const onChangeHandler = (event) => {
    console.log(" onChangeHandler Clicked");
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText('');
  };

  const handleTrimSpace =() =>{
    const newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
    console.log(newText)
  }
 
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container" >
      <div className="htmlForm-group">
        <h1>{props.heading}</h1>
        <textarea style={{backgroundColor:props.mode==='dark'?'grey':
'white'}}
          onChange={onChangeHandler}
          className="htmlForm-control"
          value={text}
          id="myBox"
          rows="8"
          cols="120"
        ></textarea>
        <button onClick={handleUpClick} className="btn btn-primary btn-sm my-3">
          Convert to UPPERCASE
        </button>
        <button onClick={handleLwClick} className="btn btn-danger btn-sm my-3 ml-3">
          Convert to lowercase
        </button>
        <button onClick={handleClearClick} className="btn btn-primary btn-sm my-3 ml-3">
          Clear
        </button>
        <button onClick={handleTrimSpace} className="btn btn-danger btn-sm my-3 ml-3">
          Trim space
        </button>
      </div>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

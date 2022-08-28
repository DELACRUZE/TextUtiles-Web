import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleupclick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleupclick3 = () => {
    let newText = "";
    setText(newText);
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1 className="my-1">{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleonchange}
          ></textarea>
        </div>
        <div className="buttonbox">

          <button className="btn btn-danger my-1 mx-1" onClick={handleupclick}>
            Converd Uppercase
          </button>
          <button className="btn btn-danger mx-1 my-1" onClick={handleupclick2}>
            Converd lowercase
          </button>
          <button className="btn btn-danger  my-1 mx-1" onClick={handleupclick3}>
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-5">
        <h1>{props.heading2}</h1>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").length} Minuts TO READ</p>
      </div>

      <div className="container">
        <h1>{props.heading3}</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

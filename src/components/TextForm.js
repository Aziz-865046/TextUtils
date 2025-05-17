import React, { useState } from "react";

export default function TextForm(prop) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Converted to uppercase!", "success");
  };
  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Converted to lowercase!", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    prop.showAlert("Text cleared!", "success");
  };
  ///////////////////////////////
  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    prop.showAlert("Text inverted!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    prop.showAlert("Text capitalized!", "success");
  };
  const copyToClip = () => {
    navigator.clipboard.writeText(text);
    prop.showAlert("Text copied to clipboard!", "success");
  };
  //////////////////////////////////
  const handleChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: prop.mode === "dark" ? "white" : "#042743" }}>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: prop.mode === "dark" ? "#13466e" : "white",
              color: prop.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="4"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>
          Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1 "
          onClick={handleCapitalize}
        >
          Capitalize
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1  my-1"
          onClick={handleinverseclick}
        >
          Text Inverse
        </button>
        <button className="btn btn-primary mx-1  my-1" onClick={speak}>
          Text Alout
        </button>
        <button className="btn btn-primary mx-1  my-1" onClick={copyToClip}>
          Text Copy
        </button>
      </div>
      <div className="container my-3" style={{ color: prop.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary</h2>

        <p>
          {text.split(" ").filter((x) => x !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        {/* <p>{text}</p> */}
      </div>
    </>
  );
}

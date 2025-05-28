import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input type="text" name="" id="" />
        <button type="button">Generate</button>
      </div>
      <div className="caption-image">
        <img width={200} height={200} alt="To be generated caption" />
        <span>Caption</span>
      </div>
    </>
  );
}

export default App;

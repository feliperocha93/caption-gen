import { useState } from "react";
import "./App.css";
import { generateCaption } from "./models/api";

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  async function addCaption() {
    setLoading(true);
    const caption = await generateCaption(imgSrc);
    setCaption(caption);
    setLoading(false);
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input onChange={(e) => setImgSrc(e.target.value)} />
        <button
          type="button"
          onClick={addCaption}
          disabled={!imgSrc || loading}
        >
          Generate
        </button>
      </div>
      <div className="caption-image">
        <img src={imgSrc} height={200} alt="To be generated caption" />
        <span>{loading ? "Loading..." : caption}</span>
      </div>
    </>
  );
}

export default App;

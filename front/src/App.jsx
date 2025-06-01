import { useEffect, useRef, useState } from "react";
import "./App.css";
import { generateCaption, translate, convertToAudio } from "./models/api";

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [caption, setCaption] = useState("<Caption>");
  const [translatedCaption, setTranslatedCaption] = useState("<Legenda>");
  const [audioSrc, setAudioSrc] = useState(null);

  const captionAudio = useRef(null);

  async function addCaption() {
    setCaption("Generating caption...");
    const caption = await generateCaption(imgSrc);
    setCaption(caption);

    setTranslatedCaption("Gerando legenda...");
    const translatedCaption = await translate(caption, "por_Latn");
    setTranslatedCaption(translatedCaption);

    const audioSrc = await convertToAudio(translatedCaption);
    setAudioSrc(`http://localhost:5000${audioSrc}`);
  }

  useEffect(() => {
    if (captionAudio.current && audioSrc) {
      captionAudio.current.pause();
      captionAudio.current.load();
      captionAudio.current.play();
    }
  }, [audioSrc]);

  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input onChange={(e) => setImgSrc(e.target.value)} />
        <button type="button" onClick={addCaption} disabled={!imgSrc}>
          Generate
        </button>
      </div>
      <div className="caption-image">
        <img src={imgSrc} height={200} />
        <span>{caption}</span>
        <span>{translatedCaption}</span>
        <audio controls ref={captionAudio}>
          <source src={audioSrc} />
        </audio>
      </div>
    </>
  );
}

export default App;

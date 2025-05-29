import ImageCaptioner from "./ImageCaptioner";

const imageCaptioner = new ImageCaptioner();

export async function generateCaption(imgSrc) {
  return await imageCaptioner.generateCaption(imgSrc);
}

export async function translate(text, targetLanguage = "por_Latn") {
  const response = await fetch("http://localhost:3000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      targetLanguage,
    }),
  });

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  const data = await response.json();
  return data.translated_text;
}

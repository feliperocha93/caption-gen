const express = require("express");
const cors = require("cors");
const { translate } = require("./models/api");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Translation service is up and running!");
});

app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  const translation = await translate(text, targetLanguage);

  res.send({ translated_text: translation });
});

app.listen(3000, () => {
  console.log("Translator service is running on port 3000");
});

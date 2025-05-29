const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Translation service is up and running!");
});

app.post("/translate", (req, res) => {
  res.send({
    translated_text: "This is a placeholder for translated text.",
  });
});

app.listen(3000, () => {
  console.log("Translator service is running on port 3000");
});

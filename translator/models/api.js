const Translator = require("./Translator");

async function translate(text, targetLanguage) {
  return await Translator.translate(text, targetLanguage);
}

module.exports = {
  translate,
};

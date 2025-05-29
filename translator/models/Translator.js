// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Translator {
  static translator = null;

  static async getTranslator() {
    if (!Translator.translator) {
      const { pipeline } = await import("@huggingface/transformers");

      Translator.translator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M",
        {
          dtype: "q8",
        }
      );
    }
    return Translator.translator;
  }

  static async translate(text, targetLanguage) {
    const translator = await Translator.getTranslator();

    const translation = await translator(text, {
      src_lang: "eng_Latn",
      tgt_lang: targetLanguage,
    });

    return translation[0].translation_text;
  }
}

module.exports = Translator;

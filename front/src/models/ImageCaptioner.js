import { pipeline } from "@huggingface/transformers";

export default class ImageCaptioner {
  captioner = null;

  async getCaptioner() {
    if (this.captioner === null) {
      this.captioner = await pipeline(
        "image-to-text",
        "Xenova/vit-gpt2-image-captioning",
        { dtype: "q8" }
      );
    }
    return this.captioner;
  }

  async generateCaption(imageSrc) {
    const captioner = await this.getCaptioner();
    const result = await captioner(imageSrc, {
      max_length: 50,
      num_beams: 4,
      do_sample: true,
      top_p: 0.9,
      temperature: 0.7,
    });
    return result[0].generated_text;
  }
}

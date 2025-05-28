import ImageCaptioner from "./ImageCaptioner";

const imageCaptioner = new ImageCaptioner();

export async function generateCaption(imgSrc) {
  return await imageCaptioner.generateCaption(imgSrc);
}

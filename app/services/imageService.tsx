import { ImageResolution } from "../models/image-resolution.model";

export class ImageService {

    public imageResolutions: { [key in ImageResolution] : string } = {
      [ImageResolution.Avatar]: "Avatar",
      [ImageResolution.OriginalSize]: "OriginalSize",
      [ImageResolution.FullHd]: "FullHd",
      [ImageResolution.Hd]: "Hd"
    };
}
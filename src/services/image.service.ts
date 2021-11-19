import axios from "axios";

export interface ImageInterface {
  description: string;
  likes: number;
  url: string;
  isLikedByMe?: boolean;
}

interface LikeResponse {
  likes: number;
}

interface ImageServiceInterface {
  get: () => Promise<ImageInterface[]>;
  like: (url: string) => Promise<LikeResponse>;
}

let imageService: ImageServiceInterface;

export class ImageService implements ImageServiceInterface {
  private static _instance: ImageService = new ImageService();

  public async get(): Promise<ImageInterface[]> {
    const { data } = await axios.get("/api/images");

    return data;
  }

  public async like(url: string): Promise<LikeResponse> {
    const { data } = await axios.post(
      `/api/images/${encodeURIComponent(url)}/like`
    );

    return data;
  }

  // Singleton
  public static getInstance(): ImageService {
    return imageService || (imageService = new ImageService());
  }
}

export default ImageService.getInstance();

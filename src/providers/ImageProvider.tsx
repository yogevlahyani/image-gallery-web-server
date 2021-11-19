import React, { useCallback, useEffect } from "react";
import imageService, { ImageInterface } from "../services/image.service";

interface Store {
  images: ImageInterface[];
  isFetching: boolean;
  likeImage: (url: string) => void;
}

export const ImageContext = React.createContext<Store>({
  images: [],
  isFetching: false,
  likeImage: () => {},
});

export const ImageProvider: React.FC = ({ children }) => {
  const [images, setImages] = React.useState<ImageInterface[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  const fetchImages = useCallback(async () => {
    setIsFetching(true);
    const images = await imageService.get();

    // setTimout is used to simulate a delay
    setTimeout(() => {
      setImages(images);
      setIsFetching(false);
    }, 1500);
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  const likeImage = useCallback(async (url: string) => {
    const { likes } = await imageService.like(url);
    const images = await imageService.get();
    setImages(
      images.map((image) =>
        image.url === url ? { ...image, likes: image.likes + likes } : image
      )
    );
  }, []);

  return (
    <ImageContext.Provider value={{ images, likeImage, isFetching }}>
      {children}
    </ImageContext.Provider>
  );
};

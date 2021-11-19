import React from "react";
import { ImageContext } from "../providers/ImageProvider";

export const useImages = () => {
  return React.useContext(ImageContext);
};

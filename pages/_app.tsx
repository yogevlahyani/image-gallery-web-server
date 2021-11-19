import "../styles/globals.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ImageProvider } from "../src/providers/ImageProvider";

function ImageGalleryWebServer({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ImageProvider>
        <Component {...pageProps} />
      </ImageProvider>
    </ChakraProvider>
  );
}

export default ImageGalleryWebServer;

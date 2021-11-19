import React, { useMemo } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useImages } from "../hooks/useImages";
import { GalleryImage } from "./GalleryImage";
import { ImagePlaceholder } from "./ImagePlaceholder";

const Gallery: React.FC<{}> = () => {
  const { images, isFetching } = useImages();

  const imagePlaceholders = useMemo(
    () =>
      Array.from({ length: 3 }, (_, index: number) => (
        <GridItem key={index}>
          <ImagePlaceholder />
        </GridItem>
      )),
    []
  );

  const imageList = useMemo(() => {
    if (!images.length) {
      return <Text>No images found</Text>;
    }

    return images.map((image) => (
      <GridItem key={image.url}>
        <GalleryImage {...image} />
      </GridItem>
    ));
  }, [images]);

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      autoRows="min-content"
      gap={10}
      width="container.xs"
    >
      {isFetching ? imagePlaceholders : imageList}
    </Grid>
  );
};

export default Gallery;

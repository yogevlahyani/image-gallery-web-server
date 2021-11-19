import React, { useCallback, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useImages } from "../hooks/useImages";
import { ImageInterface } from "../services/image.service";
import { HeartLike } from "./HeartLike";
import { ImageDetails } from "./ImageDetails";

interface Props extends ImageInterface {}

export const GalleryImage: React.FC<Props> = ({
  description,
  likes,
  url,
  isLikedByMe,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showLike, setShowLike] = useState(false);
  const { likeImage } = useImages();

  const handleLikeClick = useCallback(() => {
    setShowLike(true);
    likeImage(url);
    setTimeout(() => setShowLike(false), 1500);
  }, [likeImage, url]);

  return (
    <Box
      userSelect="none"
      height={300}
      position="relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onDoubleClick={handleLikeClick}
    >
      <Image
        alt={description}
        src={url}
        objectFit="cover"
        objectPosition="center"
        width="100%"
        height="100%"
      />
      <AnimatePresence>
        {showDetails && !showLike && (
          <ImageDetails
            description={description}
            likes={likes}
            isLiked={isLikedByMe}
          />
        )}
        {showLike && <HeartLike />}
      </AnimatePresence>
    </Box>
  );
};

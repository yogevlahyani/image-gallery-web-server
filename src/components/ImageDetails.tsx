import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { Heart } from "phosphor-react";
import { MotionFlex } from "./MotionComponents";

interface Props {
  description: string;
  likes: number;
  isLiked?: boolean;
}

export const ImageDetails: React.FC<Props> = ({
  description,
  likes,
  isLiked = false,
}) => {
  return (
    <MotionFlex
      background="rgba(0, 0,0,0.5)"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      padding={5}
      justifyContent="center"
      flexDirection="column"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <Text color="white" textAlign="center" userSelect="none">
        {description}
      </Text>
      <Button
        position="absolute"
        left={3}
        bottom={0}
        leftIcon={
          <Heart
            size={16}
            color={isLiked ? "red" : "white"}
            weight={isLiked ? "fill" : "regular"}
          />
        }
        variant="unstyled"
        textColor="white"
        fontSize="xs"
        iconSpacing={1}
        colorScheme="red"
        textAlign="center"
        display="flex"
      >
        {likes}
      </Button>
    </MotionFlex>
  );
};

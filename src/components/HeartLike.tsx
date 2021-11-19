import React from "react";
import { Heart } from "phosphor-react";
import { MotionBox } from "./MotionComponents";

export const HeartLike: React.FC = () => {
  return (
    <MotionBox
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      textAlign="center"
      justifyContent="center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      padding={20}
    >
      <Heart size="100%" weight="fill" color="red" />
    </MotionBox>
  );
};

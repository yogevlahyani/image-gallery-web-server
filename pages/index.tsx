import React from "react";
import { Container } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Gallery from "../src/components/Gallery";

const Home: NextPage = () => {
  return (
    <Container
      maxWidth="container.lg"
      mx="auto"
      my={5}
    >
      <Gallery />
    </Container>
  );
};

export default Home;

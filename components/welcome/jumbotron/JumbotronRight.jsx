import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const JumbotronRight = () => {
  return (
    <>
      <Box boxSize="lg" marginTop={"-50px"}>
        <Image src="/img/doc-jumbotron.jpg" alt="jumbotron image" />
      </Box>
    </>
  );
};

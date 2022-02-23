import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";

export const CustomIcon = ({ children, bg }) => {
  return (
    <Box bg={bg} borderRadius={"50%"} height="35px" width={"35px"}>
      <Flex justifyContent="center">{children}</Flex>
    </Box>
  );
};

import React from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";

export const CustomSpinner = ({
  message = "Loading....",
  color = "gray.800",
  left = "50%",
  top = "15em",
}) => {
  return (
    <Box position={"absolute"} top={top} left={left}>
      <Flex flexDirection={"column"} alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text color={color}>{message}</Text>
      </Flex>
    </Box>
  );
};

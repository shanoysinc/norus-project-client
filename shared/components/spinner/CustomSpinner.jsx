import React from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";

export const CustomSpinner = ({
  message = "Loading....",
  color = "gray.800",
}) => {
  return (
    <Box position={"absolute"} top="15em" left={"50%"}>
      <Flex flexDirection={"column"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Center>
          <Text color={color}>{message}</Text>
        </Center>
      </Flex>
    </Box>
  );
};

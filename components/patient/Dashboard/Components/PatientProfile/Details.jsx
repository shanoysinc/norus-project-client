import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Details = ({ title, info }) => {
  return (
    <Box>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        padding="4"
      >
        <Text
          fontSize={["sm", "sm", "md"]}
          color="teal.100"
          textAlign={"center"}
          textTransform="capitalize"
        >
          {title}
        </Text>
        <Text
          fontSize={"xs"}
          fontWeight="semibold"
          color="whiteAlpha.800"
          textAlign={"center"}
        >
          {info}
        </Text>
      </Flex>
    </Box>
  );
};

import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Details = ({ title, info }) => {
  return (
    <Flex justifyContent={"center"} mr="12" h="100%">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Text
          fontSize={"md"}
          color="teal.100"
          textAlign={"center"}
          textTransform="capitalize"
        >
          {title}
        </Text>
        <Text
          fontSize={"xs"}
          fontWeight="semibold"
          color="whiteAlpha.900"
          textAlign={"center"}
        >
          {info}
        </Text>
      </Flex>
    </Flex>
  );
};

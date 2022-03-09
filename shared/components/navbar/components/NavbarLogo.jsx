import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const NavbarLogo = () => {
  return (
    <Heading size="md">
      <Flex alignItems={"baseline"}>
        <Text color="telegram.600" fontSize={"3xl"}>
          Medi
        </Text>
        <Text fontSize={"larger"} color="whiteAlpha.900">
          Care
        </Text>
      </Flex>
    </Heading>
  );
};

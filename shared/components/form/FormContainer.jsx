import React from "react";
import { Center, Flex } from "@chakra-ui/react";

export const FormContainer = ({ children }) => {
  return (
    <Center paddingY={"16"}>
      <Flex flexDirection={"column"}>{children}</Flex>
    </Center>
  );
};

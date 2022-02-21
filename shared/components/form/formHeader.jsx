import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";
export const FormHeader = ({ subTitle }) => {
  return (
    <Flex flexDirection={"column"}>
      <Heading size="2xl">
        <Flex>
          <Text color="telegram.600" fontSize={"larger"}>
            Medi
          </Text>
          <Text fontSize={"larger"} color="gray.700">
            Care
          </Text>
        </Flex>
      </Heading>
      <Heading size="sm" color="gray.700">
        {subTitle}
      </Heading>
    </Flex>
  );
};

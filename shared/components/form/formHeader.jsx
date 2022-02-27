import React from "react";
import { Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const FormHeader = ({ subTitle }) => {
  return (
    <NextLink href={"/"} passHref>
      <Link color="gray.600">
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
      </Link>
    </NextLink>
  );
};

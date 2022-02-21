import React from "react";
import { Center, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const FormFooter = ({ leftText, rightText, linkTo }) => {
  return (
    <Center marginTop={"6"}>
      <NextLink href={linkTo} passHref>
        <Link color="gray.600">
          <Flex>
            <Text fontWeight={"semibold"} paddingRight="2">
              {leftText}
            </Text>
            <Text fontWeight={"semibold"} color={"telegram.700"}>
              {rightText}
            </Text>
          </Flex>
        </Link>
      </NextLink>
    </Center>
  );
};

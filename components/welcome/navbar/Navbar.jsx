import React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "./components";

export const Navbar = () => {
  return (
    <Flex>
      <Flex justifyContent={"space-between"} w="100%">
        <Box paddingY="7" paddingRight={["0", "10"]}>
          <Heading size={["md"]}>
            <Flex>
              <Text color="telegram.600" fontSize={["3xl", "larger"]}>
                Medi
              </Text>
              <Text fontSize={["3xl", "larger"]}>Care</Text>
            </Flex>
          </Heading>
        </Box>
        <Box w="100%" display={["none", "none", "block"]}>
          <Flex justifyContent={"space-between"}>
            <Flex>
              <NavLink to={"/"} name="About" />
              <NavLink to={"/"} name="Reviews" />
              <NavLink to={"/"} name="Price" />
              <NavLink to={"/"} name="Contact" />
            </Flex>
            <Spacer />
          </Flex>
        </Box>
        <Flex w="100%" justifyContent={"flex-end"} mr={["4", "0"]}>
          <NavLink to={"/login"} name="log in" />

          <Box paddingY="6">
            <NextLink href="/signup" passHref>
              <Button colorScheme="telegram">Sign Up</Button>
            </NextLink>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

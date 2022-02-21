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
      <Box paddingY="7" paddingRight={"12"}>
        <Heading size="md">
          <Flex>
            <Text color="telegram.600" fontSize={"larger"}>
              Medi
            </Text>
            <Text fontSize={"larger"}>Care</Text>
          </Flex>
        </Heading>
      </Box>
      <NavLink to={"/"} name="About" />
      <NavLink to={"/"} name="Reviews" />
      <NavLink to={"/"} name="Price" />
      <NavLink to={"/"} name="Contact" />

      <Spacer />
      <NavLink to={"/patient/login"} name="log in" />

      <Box paddingY="6">
        <Button colorScheme="telegram">Sign Up</Button>
      </Box>
    </Flex>
  );
};

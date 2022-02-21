import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";

export const NavLink = ({ name, to }) => {
  return (
    <Box paddingX={"4"} paddingY="8">
      <NextLink href={to} passHref>
        <Link fontWeight={"semibold"} color="gray.600">
          {name}
        </Link>
      </NextLink>
    </Box>
  );
};

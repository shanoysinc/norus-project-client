import React from "react";
import {
  Heading,
  Badge,
  Flex,
  Text,
  Button,
  Spacer,
  VStack,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const JumbotronLeft = () => {
  return (
    <>
      <VStack spacing={4} align="stretch">
        <Box>
          <Badge variant="subtle" colorScheme="green">
            🚨Medical Center
          </Badge>
        </Box>
        <Box>
          <Heading size="2xl">
            Get a complete diagnosis at
            <Flex>
              <Text color="telegram.600">Medi</Text>
              <Text>Care</Text>
            </Flex>
            Medical Center
          </Heading>
        </Box>
        <Box>
          <Text fontSize={"lg"} color="gray.600">
            Medicare is a modern medical center of a new format that provides
            high-quality medical care in the shortest time possible.
          </Text>
        </Box>
        <Box>
          <NextLink href="/login" passHref>
            <Button colorScheme="orange" size="lg" marginTop={"4"}>
              Make an appointment
              <ArrowForwardIcon w={6} h={6} />
            </Button>
          </NextLink>
        </Box>
      </VStack>
    </>
  );
};

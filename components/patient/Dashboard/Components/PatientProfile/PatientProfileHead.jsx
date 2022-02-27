import {
  Avatar,
  Flex,
  Heading,
  Text,
  Box,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";

export const PatientProfileHead = ({ patient, appointmentStats }) => {
  const { firstName, lastName, email } = patient;
  return (
    <Flex flexDirection={"column"}>
      <Flex flexDirection={"column"} alignItems="center">
        <Avatar size="xl" name={`${firstName} ${lastName}`} />
        <Heading
          size={"md"}
          mt="2"
          color="whiteAlpha.900"
          textTransform={"capitalize"}
        >
          {`${firstName} ${lastName}`}
        </Heading>
        <Text fontSize={"sm"} color="whiteAlpha.900">
          {email}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} mt="6" gap={"4"}>
        <Flex flexDirection={"column"} alignItems="center">
          <Box fontWeight={"bold"} color="whiteAlpha.900">
            {appointmentStats.numberOfAppointments}
          </Box>
          <Text fontSize={"xs"} color="whiteAlpha.900">
            appointments
          </Text>
        </Flex>
        <Center height="50px">
          <Divider orientation="vertical" colorScheme={"red"} />
        </Center>
        <Flex flexDirection={"column"} alignItems="center">
          <Box fontWeight={"bold"} color="whiteAlpha.900">
            {appointmentStats.upComming}
          </Box>
          <Box fontSize={"xs"} color="whiteAlpha.900">
            Upcoming
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

import {
  Avatar,
  Flex,
  Heading,
  Text,
  Box,
  Divider,
  Center,
  Badge,
} from "@chakra-ui/react";
import React from "react";

export const PatientProfileHead = ({ patient, appointmentStats }) => {
  const { firstName, lastName, email, doctor } = patient;
  const doctorFirstName = doctor.firstName;
  const doctorLastName = doctor.lastName;
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

        <Text
          fontSize={"sm"}
          color="whiteAlpha.900"
          mt="2"
          textAlign={"center"}
        >
          Assigned Doctor
          <Badge colorScheme={"purple"} textTransform={"capitalize"}>
            Dr. {`${doctorFirstName} ${doctorLastName}`}
          </Badge>
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
          <Divider orientation="vertical" />
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

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
    <Box paddingX={"10"}>
      <Flex justifyContent={"center"}>
        <Flex flexDirection={"column"}>
          <Flex flexDirection={"column"} alignItems="center">
            <Avatar size={"xl"} name={`${firstName} ${lastName}`} />
            <Heading
              size={"md"}
              mt="2"
              color="whiteAlpha.800"
              textTransform={"capitalize"}
            >
              {`${firstName} ${lastName}`}
            </Heading>
            <Text fontSize={"sm"} color="whiteAlpha.800">
              {email}
            </Text>

            <Text
              fontSize={"sm"}
              color="whiteAlpha.800"
              mt="2"
              textAlign={"center"}
            >
              Assigned Doctor
              <br />
              <Badge colorScheme={"purple"} textTransform={"capitalize"}>
                Dr. {`${doctorFirstName} ${doctorLastName}`}
              </Badge>
            </Text>
          </Flex>
          <Flex justifyContent={"center"} mt="6" gap={"4"}>
            <Flex flexDirection={"column"} alignItems="center">
              <Box fontWeight={"bold"} color="whiteAlpha.800">
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
              <Box fontWeight={"bold"} color="whiteAlpha.800">
                {appointmentStats.upComming}
              </Box>
              <Box fontSize={"xs"} color="whiteAlpha.800">
                Upcoming
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Center
          marginX={"6"}
          pr={"10"}
          display={["none", "none", "none", "block"]}
        >
          <Divider height="100%" orientation="vertical" />
        </Center>
      </Flex>
    </Box>
  );
};

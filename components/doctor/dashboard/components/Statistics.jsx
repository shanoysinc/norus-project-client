import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaUserAlt, FaWheelchair, FaRegWindowMaximize } from "react-icons/fa";
import { CustomIcon } from "../../../../shared/components/icon/CustomIcon";

export const Statistics = ({
  numOfPatients,
  numOfAppointments,
  numOfUpcomingAppointments,
}) => {
  return (
    <Box
      bg="gray.800"
      p="10"
      borderRadius={"4"}
      height="fit-content"
      // w={"min-content"}
    >
      <Flex gap="4" wrap={["wrap", "wrap", "nowrap"]}>
        <Box
          bg="gray.700"
          borderRadius={"4"}
          p="15"
          w={["100%", "100%", "fit-content"]}
        >
          <Flex alignItems={"center"}>
            <CustomIcon bg="red">
              <Icon as={FaWheelchair} w={5} h={5} mt="1.5" />
            </CustomIcon>
            <Text fontSize={"md"} pl="2">
              Patients
            </Text>
          </Flex>
          <Text mt="8" fontSize={"3xl"} fontWeight="bold">
            {numOfPatients}
          </Text>
        </Box>
        <Box bg="gray.700" borderRadius={"4"} p="15">
          <Flex alignItems={"center"}>
            <CustomIcon bg="blue">
              <Icon as={FaRegWindowMaximize} w={5} h={5} mt="1.5" />
            </CustomIcon>
            <Text fontSize={"md"} pl="2">
              Total Appointments
            </Text>
          </Flex>
          <Text mt="4" fontSize={"3xl"} fontWeight="bold">
            {numOfAppointments}
          </Text>
        </Box>
        <Box bg="gray.700" borderRadius={"4"} p="15">
          <Flex alignItems={"center"}>
            <CustomIcon bg="green">
              <Icon as={FaRegWindowMaximize} w={5} h={5} mt="1.5" />
            </CustomIcon>
            <Text fontSize={"md"} pl="2">
              Upcoming Appointments
            </Text>
          </Flex>
          <Text mt="4" fontSize={"3xl"} fontWeight="bold">
            {numOfUpcomingAppointments}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AppointmentModalButton } from "./AppointmentModalButton";

export const AppointmentHeading = ({ token, doctor }) => {
  return (
    <Heading color="whiteAlpha.800">
      <Flex alignItems={"flex-end"} mb="10" wrap={"wrap"}>
        <Text pr="10">Your Appointments</Text>{" "}
        <AppointmentModalButton token={token} doctor={doctor} />
      </Flex>
    </Heading>
  );
};

import { Box, Center, Divider, Flex, Heading, Spinner } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../../../../hooks";
import { PatientDetails } from "./PatientDetails";
import { PatientProfileHead } from "./PatientProfileHead";

export const PatientProfile = ({ patient, appointmentStats }) => {
  return (
    <>
      <Heading color="whiteAlpha.900" mb="4">
        Your Profile
      </Heading>
      <Box bg="gray.800" p="10" borderRadius={"4"}>
        <Flex>
          <PatientProfileHead
            patient={patient}
            appointmentStats={appointmentStats}
          />
          {/* <Center height="100px">
        </Center> */}
          <Divider orientation="vertical" />
          {/* <Box height={""} bg="red" width={"4"} /> */}
          <PatientDetails patient={patient} />
        </Flex>
      </Box>
    </>
  );
};

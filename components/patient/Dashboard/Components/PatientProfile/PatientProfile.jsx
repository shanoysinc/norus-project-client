import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
} from "@chakra-ui/react";
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
      <Box bg="gray.800" p={["6"]} borderRadius={"4"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <GridItem>
            <PatientProfileHead
              patient={patient}
              appointmentStats={appointmentStats}
            />
          </GridItem>
          {/* <Center marginX={"6"}>
            <Divider height="100%" orientation="vertical" />
          </Center> */}
          <GridItem>
            <PatientDetails patient={patient} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

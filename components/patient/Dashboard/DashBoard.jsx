import { Center, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../../../hooks";
import { Appointments } from "./Components/appointments/Appointments";
import { PatientProfile } from "./Components/PatientProfile/PatientProfile";
import { TimeLine } from "./Components/timeline/TimeLine";

export const DashBoard = () => {
  const { auth } = useAuth();
  const [appointmentStats, setAppointmentStats] = useState({
    numberOfAppointments: 0,
    upComming: 0,
  });

  if (!auth) {
    return (
      <Center mt="10%">
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <Grid templateColumns="repeat(24, 1fr)" mt={["20", "20", "20", "10"]}>
        <GridItem colSpan={[20, 22, 22, 13]} colStart={["2", "2", "2", "2"]}>
          <PatientProfile
            patient={auth.patient}
            appointmentStats={appointmentStats}
          />
        </GridItem>
        <GridItem
          colSpan={[20, 20, 20, 8]}
          colStart={["2", "2", "2", "16"]}
          rowStart={["2", "2", "2,", "1"]}
          mt={["20", "20", "20", "0"]}
        >
          <TimeLine token={auth.patient.token} />
        </GridItem>
        <GridItem colSpan={20} colStart={"2"} mt={["20", "20", "20", "4"]}>
          <Appointments
            doctor={auth.patient.doctor}
            token={auth.patient.token}
            setAppointmentStats={setAppointmentStats}
          />
        </GridItem>
      </Grid>
    </>
  );
};

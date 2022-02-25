import { Box, Flex, Grid, Heading, GridItem } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { baseApiClient } from "../../../lib/axios/baseApiClient";
import { Statistics } from "./components/Statistics";
import { TodayAppointments } from "./components/TodayAppointments";
import { useQuery, useQueryClient } from "react-query";
import { CustomSpinner } from "../../../shared/components/spinner/CustomSpinner";
import { getTodayAppointment } from "../../../lib/getTodayAppointments";
import { UpcomingAppointments } from "./components/UpcomingAppointments";
import { isAfter, subDays } from "date-fns";

export const DoctorDashboard = ({ doctor, docFullName }) => {
  const [numOfUpcomingAppointments, setNumOfUpcomingAppointments] = useState(0);
  // const [numOfAppointments, setNumOfAppointments] = useState(0);
  // const [numOfPatients, setNumOfPatients] = useState(0);
  const { data, isLoading, isError } = useQuery(
    "doctorsAppointments",
    () =>
      baseApiClient.get("/doctor/appointments", {
        headers: {
          authorization: `Bearer ${doctor.token}`,
        },
      }),
    {
      onSuccess: (data) => {
        let numOfUpcommingApp = 0;
        data.data.appointments.forEach((appointment) => {
          const yesterday = subDays(new Date(), 1);
          if (
            isAfter(new Date(appointment.date), yesterday) &&
            appointment.approve == true
          ) {
            numOfUpcommingApp += 1;
          }
        });
        setNumOfUpcomingAppointments(numOfUpcommingApp);
      },
    }
  );

  if (isError) {
    return (
      <CustomSpinner
        message="Sorry there seems to be an error please reload browser"
        color="whiteAlpha.900"
      />
    );
  }

  if (isLoading) {
    return <CustomSpinner color="whiteAlpha.900" />;
  }

  const appointments = data.data.appointments;

  const todayAppointments = getTodayAppointment(appointments);

  return (
    <Box marginX="10" marginY={"2"}>
      <Heading color="whiteAlpha.900" size={"lg"}>
        <Heading ml="14" mb="4">
          Hello Dr. {docFullName}
        </Heading>
        <Grid w={"100%"} templateColumns="repeat(24, 1fr)">
          <GridItem colSpan={12} colStart="2" rowSpan={"1"}>
            <Statistics
              numOfPatients={doctor.patients.length}
              numOfAppointments={doctor.appointments.length}
              numOfUpcomingAppointments={numOfUpcomingAppointments}
            />
          </GridItem>
          <GridItem colSpan={12} colStart={"15"}>
            <TodayAppointments
              todayAppointments={todayAppointments}
              token={doctor.token}
            />
          </GridItem>
          <GridItem
            colSpan={12}
            colStart={"2"}
            rowStart="3"
            rowSpan={"5"}
            mt="-250"
            bg="gray.800"
            height={"fit-content"}
          >
            <UpcomingAppointments
              token={doctor.token}
              appointments={appointments}
            />
          </GridItem>
        </Grid>
      </Heading>
    </Box>
  );
};

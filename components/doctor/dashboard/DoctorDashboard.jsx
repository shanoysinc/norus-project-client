import { Box, Grid, Heading, GridItem, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { baseApiClient } from "../../../lib/axios/baseApiClient";
import { Statistics } from "./components/Statistics";
import { TodayAppointments } from "./components/TodayAppointments";
import { useQuery } from "react-query";
import { CustomSpinner } from "../../../shared/components/spinner/CustomSpinner";
import { getTodayAppointment } from "../../../lib/getTodayAppointments";
import { UpcomingAppointments } from "./components/UpcomingAppointments";
import { isAfter, subDays } from "date-fns";

export const DoctorDashboard = ({ doctor, docFullName }) => {
  const [numOfUpcomingAppointments, setNumOfUpcomingAppointments] = useState(0);

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
      <Heading
        color="whiteAlpha.800"
        size={"lg"}
        // ml="14"
        mb="4"
        textTransform={"capitalize"}
      >
        Hello Dr. {docFullName}
      </Heading>
      <Heading
        color="whiteAlpha.800"
        size={"md"}
        mt={["5", "5", "5", "0"]}
        mb="4"
        textTransform={"capitalize"}
      >
        Statistics
      </Heading>
      <Grid
        w={"100%"}
        templateColumns="repeat(3, 1fr)"
        color="whiteAlpha.800"
        gap="4"
      >
        <GridItem
          colSpan={["3", "3", "1", "1"]}
          colStart={["1", "1", "1", "1"]}
          rowSpan={"1"}
        >
          <Statistics
            numOfPatients={doctor.patients.length}
            numOfAppointments={doctor.appointments.length}
            numOfUpcomingAppointments={numOfUpcomingAppointments}
          />
        </GridItem>
        <GridItem
          colSpan={["3", "3", "2", "3"]}
          colStart={["1", "1", "1", "2"]}
          rowStart={["3", "3", "3", "1"]}
        >
          <Heading size={"md"} mb="4" mt={["5", "5", "5", "-10"]}>
            {" "}
            Today's Appointments
          </Heading>
          <TodayAppointments
            todayAppointments={todayAppointments}
            token={doctor.token}
          />
        </GridItem>

        <GridItem
          // colSpan={12}
          colSpan={["3", "3", "2", "1"]}
          // colStart={"2"}
          rowStart="4"
          height={"fit-content"}
          mt={["0", "0", "0", "-18.6em"]}
          mb="10"
        >
          <Heading
            color="whiteAlpha.900"
            size={"md"}
            mt={["5", "5", "5", "0"]}
            mb="4"
            textTransform={"capitalize"}
          >
            Future Appointments
          </Heading>
          <UpcomingAppointments
            token={doctor.token}
            appointments={appointments}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

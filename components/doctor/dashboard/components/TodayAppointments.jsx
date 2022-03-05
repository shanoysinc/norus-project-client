import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { DoctorsPatient } from "./DoctorsPatient";

export const TodayAppointments = ({ todayAppointments, token }) => {
  return (
    <Box
      bg="gray.800"
      paddingX={"10"}
      paddingY="5"
      borderRadius={"4"}
      height="500px"
      overflowY={"auto"}
    >
      {todayAppointments.length < 1 ? (
        <Text fontSize={"sm"} mt="10" textAlign={"center"}>
          Your Schedule is free for the day😊
        </Text>
      ) : (
        todayAppointments.map((appointment) => (
          <DoctorsPatient
            date={appointment.date}
            token={token}
            id={appointment._id}
            approve={appointment.approve}
            key={appointment._id}
            name={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
            symptom={appointment.symptom}
            time={appointment.time}
          />
        ))
      )}
    </Box>
  );
};

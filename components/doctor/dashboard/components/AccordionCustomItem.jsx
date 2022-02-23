import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { DoctorsPatient } from "./DoctorsPatient";

export const AccordionCustomItem = ({ title, appointments, token }) => {
  return (
    <AccordionItem borderRadius={"4"} border="none">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" color="skyblue">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>

      {appointments.length < 1 ? (
        <AccordionPanel pb={4}>
          <Text
            paddingY="10"
            fontWeight={"normal"}
            textAlign={"center"}
            fontSize={"md"}
          >
            No appointments!
          </Text>
        </AccordionPanel>
      ) : (
        appointments.map((appointment) => (
          <AccordionPanel key={appointment._id}>
            <DoctorsPatient
              token={token}
              id={appointment._id}
              approve={appointment.approve}
              name={`${appointment.patient.firstName} ${appointment.patient.lastName}`}
              symptom={appointment.symptom}
              time={appointment.time}
              date={appointment.date}
            />
          </AccordionPanel>
        ))
      )}
    </AccordionItem>
  );
};

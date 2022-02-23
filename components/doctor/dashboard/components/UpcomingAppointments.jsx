import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { format, isTomorrow, parseISO, addDays, isAfter } from "date-fns";
import { DoctorsPatient } from "./DoctorsPatient";
import { AccordionCustomItem } from "./AccordionCustomItem";

export const UpcomingAppointments = ({
  appointments,
  token,
  setNumOfUpcomingAppointments,
}) => {
  const tomorrowsAppointments = appointments.filter((appointment) =>
    isTomorrow(new Date(appointment.date))
  );

  const tomorrowDate = addDays(new Date(), 1);
  const upCommingAppointments = appointments.filter((appointment) =>
    isAfter(new Date(appointment.date), tomorrowDate)
  );

  useEffect(() => {
    setNumOfUpcomingAppointments(
      tomorrowsAppointments.length + upCommingAppointments.length
    );
  }, []);

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionCustomItem
        title={"Tomorrow's Appointments"}
        appointments={tomorrowsAppointments}
        token={token}
      />
      <AccordionCustomItem
        token={token}
        title={"Upcoming Appointments"}
        appointments={upCommingAppointments}
      />
    </Accordion>
  );
};

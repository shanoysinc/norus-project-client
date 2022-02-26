import React, { useEffect } from "react";
import { Accordion } from "@chakra-ui/react";
import { isTomorrow, addDays, isAfter } from "date-fns";
import { AccordionCustomItem } from "./AccordionCustomItem";

export const UpcomingAppointments = ({ appointments, token }) => {
  const tomorrowsAppointments = appointments.filter((appointment) =>
    isTomorrow(new Date(appointment.date))
  );

  const tomorrowDate = addDays(new Date(), 1);
  const upCommingAppointments = appointments.filter((appointment) =>
    isAfter(new Date(appointment.date), tomorrowDate)
  );

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

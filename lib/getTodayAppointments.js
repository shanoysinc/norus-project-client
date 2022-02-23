import { isToday } from "date-fns";

export const getTodayAppointment = (appointments) => {
  const appment = [];
  appointments.forEach((appointment) => {
    if (isToday(new Date(appointment.date))) {
      appment.push(appointment);
    }
  });
  return appment;
};

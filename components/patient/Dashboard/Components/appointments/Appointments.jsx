import React, { useEffect, useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Spinner,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { baseApiClient } from "../.../../../../../../lib/axios/baseApiClient.js";
import { format, parseISO, isAfter } from "date-fns";
import { AppointmentModalButton } from "./AppointmentModalButton.jsx";

export const Appointments = ({ token, setAppointmentStats, doctor }) => {
  const { data, isLoading } = useQuery(
    "appointments",
    () =>
      baseApiClient.get("/patient/appointment", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (res) => {
        let upComming = 0;

        res.data.appointments.forEach((appointment) => {
          if (isAfter(new Date(appointment.date), new Date())) {
            upComming += 1;
          }
        });
        setAppointmentStats({
          numberOfAppointments: res.data.appointments.length,
          upComming,
        });
      },
    }
  );

  if (isLoading) {
    return (
      <Flex flexDirection={"column"}>
        <Heading mb="8">Your Appointments</Heading>
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Flex>
    );
  }

  const hasAppointments =
    data && data.data && data.data.appointments.length > 0;

  if (!hasAppointments) {
    return (
      <Flex flexDirection={"column"}>
        <Heading mb="8" color="whiteAlpha.900">
          <Flex alignItems={"flex-end"} pl="10">
            <Text pr="10">Your Appointments</Text>{" "}
            <AppointmentModalButton token={token} doctor={doctor} />
          </Flex>
        </Heading>
        <Text>You current have no appointments</Text>
        <AppointmentModalButton token={token} doctor={doctor} />
      </Flex>
    );
  }

  const appointments = data.data.appointments;

  const sortAppointment = appointments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Heading mb="8" color="whiteAlpha.900">
        <Flex alignItems={"flex-end"} pl="10">
          <Text pr="10">Your Appointments</Text>{" "}
          <AppointmentModalButton token={token} doctor={doctor} />
        </Flex>
      </Heading>
      <Table variant="simple" size={"lg"} bg="gray.800" color="whiteAlpha.900">
        <TableCaption color="whiteAlpha.900">
          list of your appointments
        </TableCaption>
        <Thead>
          <Tr>
            <Th color="blue.400">Dates</Th>
            <Th color="blue.400">symptoms</Th>
            <Th color="blue.400">approve</Th>
            <Th color="blue.400">time</Th>
            <Th color="blue.400">detials</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortAppointment.map((appointment, index) => (
            <Tr key={index}>
              <Td>{format(new Date(appointment.date), "MM/dd/yyyy")}</Td>
              <Td>{appointment.symptom}</Td>
              <Td>{appointment.approve ? "Yes" : "No"}</Td>
              <Td>{format(parseISO(appointment.time), "h:mm a")}</Td>
              <Td>{appointment.details}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
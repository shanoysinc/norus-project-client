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
  Box,
  Badge,
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
          if (
            isAfter(new Date(appointment.date), new Date()) &&
            appointment.approve === true
          ) {
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
      <Flex flexDirection={"column"} h="20vh">
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
      <Flex flexDirection={"column"} pl="10" pb="10">
        <Heading mb="10" color="whiteAlpha.900">
          <Flex alignItems={"flex-end"} wrap={"wrap"}>
            <Text pr="10">Your Appointments</Text>{" "}
            <AppointmentModalButton token={token} doctor={doctor} />
          </Flex>
        </Heading>

        <Text color="whiteAlpha.900">You current have no appointments</Text>
      </Flex>
    );
  }

  const appointments = data.data.appointments;

  const sortAppointment = appointments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Box>
      <Heading color="whiteAlpha.900">
        <Flex alignItems={"flex-end"} mb="10" pl="10" wrap={"wrap"}>
          <Text pr="10">Your Appointments</Text>{" "}
          <AppointmentModalButton token={token} doctor={doctor} />
        </Flex>
      </Heading>
      <Table
        variant="simple"
        size={"lg"}
        bg="gray.800"
        color="whiteAlpha.900"
        mb="10"
      >
        <TableCaption color="whiteAlpha.900">
          list of your appointments
        </TableCaption>
        <Thead>
          <Tr>
            <Th
              display={["none", "table-cell", "table-cell", "table-cell"]}
              color="teal.100"
            >
              Dates
            </Th>
            <Th color="teal.100">symptoms</Th>
            <Th color="teal.100">approve</Th>
            <Th
              display={["none", "table-cell", "table-cell", "table-cell"]}
              color="teal.100"
            >
              time
            </Th>
            <Th
              display={["none", "none", "table-cell", "table-cell"]}
              color="teal.100"
            >
              detials
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortAppointment.map((appointment, index) => (
            <Tr key={index}>
              <Td display={["none", "table-cell", "table-cell", "table-cell"]}>
                {format(new Date(appointment.date), "MMM dd, yyyy.")}
              </Td>
              <Td>
                <Badge ml="4" colorScheme={"yellow"}>
                  {appointment.symptom}
                </Badge>
              </Td>
              <Td>
                {appointment.approve ? (
                  <Badge ml="4" colorScheme={"green"}>
                    Yes
                  </Badge>
                ) : (
                  <Badge ml="4" colorScheme={"red"}>
                    No
                  </Badge>
                )}
              </Td>
              <Td display={["none", "table-cell", "table-cell", "table-cell"]}>
                {format(parseISO(appointment.time), "h:mm a")}
              </Td>
              <Td display={["none", "none", "table-cell", "table-cell"]}>
                {appointment.details}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

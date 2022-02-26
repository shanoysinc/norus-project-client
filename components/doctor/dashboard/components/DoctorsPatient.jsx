import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { baseApiClient } from "../../../../lib/axios/baseApiClient";

export const DoctorsPatient = ({
  name,
  symptom,
  time,
  id,
  token,
  approve,
  date,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (appVal) =>
      baseApiClient.patch("/doctor/appointments", appVal, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("doctorsAppointments");
      },
    }
  );
  const updateAppointment = () => {
    mutation.mutate({ currentAppointmentId: id, approve });
  };
  return (
    <Box mt="6" bg="gray.700" p="4" borderRadius={"4"}>
      <Flex justifyContent="space-between">
        <Box>
          <Flex>
            <Avatar name={name} />
            <Box pl="2" pt="1">
              <Text fontSize={"sm"}>{name}</Text>
              <Text fontSize={"xs"} color="skyblue">
                {symptom}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box pl="5">
          <Text fontSize={"xs"} mt="1" textAlign={"left"}>
            {format(new Date(date), "MMM dd, yyyy.")}
          </Text>
          <Flex alignItems={"center"}>
            <Icon
              cursor={"pointer"}
              onClick={updateAppointment}
              color={approve ? "green.300" : "red.300"}
              as={FaCheckCircle}
              w={5}
              h={5}
              mt="1.5"
            />
            <Text fontSize={"sm"} mt="1" pl="2">
              {format(parseISO(time), "h:mm a")}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

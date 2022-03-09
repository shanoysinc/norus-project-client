import { Avatar, Box, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { format, isAfter, parseISO, subDays } from "date-fns";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { baseApiClient } from "../../../../lib/axios/baseApiClient";
import { DoctorPatientModal } from "./DoctorPatientModal";
import { DoctorsPatientBadge } from "./DoctorsPatientBadge";

export const DoctorsPatient = ({
  name,
  symptom,
  time,
  id,
  token,
  approve,
  date,
  details,
}) => {
  // console.log("details", details);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const yeserdayDate = subDays(new Date(), 1);
  const isPastAppointment = isAfter(new Date(date), yeserdayDate);

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
    <>
      <Box mt="6" bg="gray.700" p="4" borderRadius={"4"}>
        <Flex justifyContent="space-between">
          <Box onClick={onOpen} cursor="pointer">
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
            <Flex alignItems={"center"}>
              {isPastAppointment ? (
                <Icon
                  cursor={"pointer"}
                  onClick={updateAppointment}
                  color={approve ? "green.300" : "red.300"}
                  as={FaCheckCircle}
                  w={8}
                  h={8}
                  mt="1.5"
                />
              ) : (
                <DoctorsPatientBadge approve={approve} />
              )}
              <Box ml="6">
                <Flex flexDirection={"column"}>
                  <Text fontSize={"xs"} mt="1">
                    {format(new Date(date), "MMM dd, yyyy.")}
                  </Text>
                  <Text fontSize={"sm"} mt="1">
                    {format(parseISO(time), "h:mm a")}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <DoctorPatientModal
        name={name}
        symptom={symptom}
        time={time}
        approve={approve}
        date={date}
        details={details}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

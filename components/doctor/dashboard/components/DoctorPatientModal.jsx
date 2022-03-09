import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";

export const DoctorPatientModal = ({
  isOpen,
  onClose,
  name,
  symptom,
  time,
  approve,
  date,
  details,
}) => {
  // console.log("d", { name, symptom, time, approve, date, details });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={"capitalize"}>
          {name} Appointment
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="10">
          {approve ? (
            <Badge mt="-12" colorScheme={"green"} fontSize={"sm"}>
              Approve
            </Badge>
          ) : (
            <Badge mt="-12" colorScheme={"red"} fontSize={"sm"}>
              Not Approve
            </Badge>
          )}
          <Flex flexDirection={"column"} mt="2">
            <Text>Reason's for Doctor's visit:</Text>
            <Badge
              mt="2"
              colorScheme={"purple"}
              fontSize={"md"}
              width="fit-content"
            >
              {symptom}
            </Badge>
          </Flex>
          <Text mt="6">Additional Details:</Text>
          <Text color={"gray.600"}>{details}</Text>

          <Text mt="6">Appointment Date:</Text>
          <Text color={"gray.600"}>
            {format(new Date(date), "MMM dd, yyyy")} @{" "}
            {format(parseISO(time), "h:mm a")}
          </Text>
        </ModalBody>

        {/* <ModalFooter>Hello</ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Text,
  Select,
  Textarea,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQueryClient } from "react-query";
import { baseApiClient } from "../../../../../lib/axios/baseApiClient";

const symptoms = [
  "Check in with Doctor",
  "Dizzy",
  "Runny nose",
  "fast heart rate",
  "fever",
  "chest pain",
  "covid-19",
  "common cold",
  "sinus",
];
export const CreateAppointmentModal = ({ isOpen, onClose, token, doctor }) => {
  const toast = useToast();
  const [startDate, setStartDate] = useState(new Date());
  const [symptom, setSymptom] = useState("Check in with Doctor");
  const [details, setDetails] = useState("N/A");
  const queryClient = useQueryClient();

  const symptomHandler = (e) => {
    setSymptom(e.target.value);
  };

  const { isLoading, mutate } = useMutation(
    (newAppointment) =>
      baseApiClient.post("/patient/appointment", newAppointment, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),

    {
      onSuccess: () => {
        toast({
          title: `Dr. ${doctor.firstName} will response to this appointment in the next 24hrs. `,
          status: "success",
          isClosable: true,
          position: "top",
        });
        queryClient.invalidateQueries("appointments");
        queryClient.invalidateQueries("doctorsAppointments");
        onClose();
      },
    }
  );

  const submitAppointmentHandler = () => {
    if (!symptom) {
      return;
    }

    mutate({
      doctor: doctor._id,
      date: startDate,
      symptom,
      details,
      time: startDate,
    });
    setDetails("N/A");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel htmlFor="symptom" color="gray.700">
            Symptom
          </FormLabel>
          <Select
            placeholder={"Select symptom"}
            id="symptom"
            mb="4"
            onChange={symptomHandler}
          >
            {symptoms.map((symptom) => (
              <option value={symptom} key={symptom}>
                {symptom}
              </option>
            ))}
          </Select>

          <FormLabel htmlFor="details" color="gray.700">
            Details
          </FormLabel>
          <Textarea
            placeholder="Add details for your appointment to make it easier for you and the doctor when visit"
            bg="blackAlpha.50"
            mb="4"
            id="details"
            onChange={(e) => setDetails(e.target.value)}
          />

          <FormLabel htmlFor="date" color="gray.700">
            Select appointments date and time
          </FormLabel>
          <DatePicker
            selected={startDate}
            showTimeSelect
            dateFormat="Pp"
            onChange={(date) => setStartDate(date)}
          />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button
            onClick={submitAppointmentHandler}
            colorScheme="orange"
            mr={3}
          >
            {isLoading ? <Spinner size="md" /> : <Text> Create</Text>}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

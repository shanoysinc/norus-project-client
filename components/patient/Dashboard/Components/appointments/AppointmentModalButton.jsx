import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { CreateAppointmentModal } from "./CreateAppointmentModal";

export const AppointmentModalButton = ({ token, doctor }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="orange" size="md" mt="6">
        Create an Appointment
      </Button>
      <CreateAppointmentModal
        doctor={doctor}
        isOpen={isOpen}
        onClose={onClose}
        token={token}
      />
    </Box>
  );
};

import { Badge, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";
import { Event } from "react-trivial-timeline";

export const TimlineEvent = ({ approve, symptom, createdAt }) => {
  return (
    <>
      <Event
        interval={{
          start: format(new Date(createdAt), "MMM dd, yyyy."),
          end: format(parseISO(createdAt), "h:mm a"),
        }}
        lineColor="#0BC5EA"
        intervalBackground={"black"}
        intervalColor="white"
        title={""}
      >
        <Text color="white">
          Appointment for {symptom} -
          <Badge ml="4" colorScheme={approve ? "green" : "red"}>
            {approve ? "Approve" : "Decline"}
          </Badge>
        </Text>
      </Event>
    </>
  );
};

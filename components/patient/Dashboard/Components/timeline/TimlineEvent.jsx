import { Badge, Text } from "@chakra-ui/react";
import React from "react";
import { Event } from "react-trivial-timeline";

export const TimlineEvent = ({ approve, symptom }) => {
  return (
    <>
      <Event
        interval={{ start: 2010 }}
        lineColor="#007AB8;"
        intervalBackground={"black"}
        intervalColor="white"
        title={""}
      >
        <Text color="white">
          {symptom}
          <Badge ml="4" colorScheme={approve ? "green" : "red"}>
            {approve ? "Approve" : "Decline"}
          </Badge>
        </Text>
      </Event>
    </>
  );
};

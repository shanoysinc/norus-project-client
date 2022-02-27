import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { CustomSpinner } from "../../../../../shared/components/spinner/CustomSpinner";
import { Timeline } from "react-trivial-timeline";
import { baseApiClient } from "../../../../../lib/axios/baseApiClient";
import { TimlineEvent } from "./TimlineEvent";
export const TimeLine = ({ token }) => {
  const { data, isLoading } = useQuery("patientTimline", () =>
    baseApiClient("/patient/timeline", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  );

  if (isLoading) {
    return <CustomSpinner color="white" />;
  }

  const timelineData = data.data.patientTimeline;
  return (
    <>
      <Heading color="whiteAlpha.900" mb="4">
        Timeline Activity
      </Heading>

      <Box
        bg={"gray.800"}
        // p="10"
        pl="10"
        pt="4"
        pb="8"
        borderRadius={"4"}
        height="350px"
        overflowY="auto"
      >
        <Timeline lineColor={"black"}>
          {timelineData.map((item) => (
            <TimlineEvent
              key={item._id}
              createdAt={item.createdAt}
              approve={item.approve}
              symptom={item.appointment.symptom}
            />
          ))}
        </Timeline>
      </Box>
    </>
  );
};

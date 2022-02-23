import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { Timeline, Event } from "react-trivial-timeline";
export const TimeLine = () => {
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
        borderRadius={"4"}
        height="300px"
        overflowY="auto"
      >
        <Timeline lineColor={"black"}>
          <Event
            interval={{ start: 2010 }}
            // title="Event title"
            // subtitle="Subtitle"
            lineColor="#007AB8;"
            intervalBackground={"black"}
            intervalColor="white"
            title={"hello"}
          >
            <Text color="white">
              Working out{" "}
              <Badge ml="4" colorScheme="green">
                approved
              </Badge>
            </Text>
          </Event>
          <Event
            title={"hello"}
            intervalBackground={"black"}
            intervalColor="white"
            interval="2016 – 2019"
            // title="Some text"
            lineColor={"orange"}
          >
            <Text color="white">
              Sleepy
              <Badge ml="4" colorScheme="red">
                Decline
              </Badge>
            </Text>
          </Event>
          <Event
            title={"hello"}
            intervalBackground={"black"}
            intervalColor="white"
            interval="2016 – 2019"
            // title="Some text"
            lineColor={"orange"}
          >
            <Text color="white">
              Sleepy
              <Badge ml="4" colorScheme="purple">
                Decline
              </Badge>
            </Text>
          </Event>
        </Timeline>
      </Box>
    </>
  );
};

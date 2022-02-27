import { Center, Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Details } from "./Details";

export const PatientDetails = ({ patient }) => {
  const { gender, address, age, height, weight, phoneNumber, occupation } =
    patient;
  return (
    // <Flex wrap={"wrap"}>
    <>
      <Center display={["block", "block", "block", "none"]}>
        <Divider w={["95%", "100%", "100%", "100%"]} orientation="horizontal" />
      </Center>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        ml={["0", "0", "0", "-20"]}
        mt="8"
      >
        <Details title="Gender" info={gender} />
        <Details title="age" info={age} />
        <Details title="height" info={height} />
        <Details title="weight" info={weight} />
        <Details title="phone number" info={phoneNumber} />
        <Details title="occupation" info={occupation} />
        <Details title="Address" info={address} />
      </Grid>
    </>
  );
};

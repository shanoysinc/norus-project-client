import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Details } from "./Details";

export const PatientDetails = ({ patient }) => {
  const { gender, address, age, height, weight, phoneNumber, occupation } =
    patient;
  return (
    <Grid w="100%" templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={1}>
        <Details title="Gender" info={gender} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="age" info={age} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="height" info={height} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="weight" info={weight} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="phone number" info={phoneNumber} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="occupation" info={occupation} />
      </GridItem>
      <GridItem colSpan={1}>
        <Details title="Address" info={address} />
      </GridItem>
    </Grid>
  );
};

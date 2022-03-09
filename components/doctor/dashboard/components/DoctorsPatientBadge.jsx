import React from "react";
import { Badge } from "@chakra-ui/react";

export const DoctorsPatientBadge = ({ approve }) => {
  return approve ? (
    <Badge colorScheme={"green"}>Was Approved</Badge>
  ) : (
    <Badge colorScheme={"red"}>Didn't Approved</Badge>
  );
};

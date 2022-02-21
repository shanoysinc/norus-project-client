import React from "react";
import { FormControl } from "@chakra-ui/react";

export const FormBody = ({ children }) => {
  return (
    <FormControl
      marginTop={"6"}
      padding={"8"}
      borderRadius={"6"}
      isRequired
      bg="gray.50"
      width={"xs"}
      boxShadow="md"
    >
      {children}
    </FormControl>
  );
};

import React from "react";
import { FormControl } from "@chakra-ui/react";

export const FormBody = ({ children, isInvalid, isRequired }) => {
  return (
    <FormControl
      marginTop={"6"}
      padding={"8"}
      borderRadius={"6"}
      isRequired={isRequired}
      bg="gray.50"
      width={"md"}
      boxShadow="md"
      isInvalid={isInvalid}
    >
      {children}
    </FormControl>
  );
};

import React, { useState } from "react";
import {
  Input,
  FormLabel,
  Button,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
} from "../../shared/components/form";

export const Login = ({
  userTitle,
  setEmail,
  setPassword,
  submitButton,
  error,
}) => {
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Flex bg="blackAlpha.200" h="100vh" justifyContent={"center"}>
      <FormContainer>
        <FormHeader subTitle={userTitle} />
        <FormBody isInvalid={error.isError}>
          <FormLabel htmlFor="email" color="gray.700">
            Email address
          </FormLabel>
          <Input
            id="email"
            type="email"
            isRequired
            bg="blackAlpha.50"
            onChange={emailHandler}
          />
          {error.isError && error.errorMessages.email ? (
            <FormErrorMessage>{error.errorMessages.email}</FormErrorMessage>
          ) : null}
          <FormLabel htmlFor="password" color="gray.700" mt="4">
            Password
          </FormLabel>
          <Input id="password" type="password" onChange={passwordHandler} />
          {error.isError && error.errorMessages.password ? (
            <FormErrorMessage>{error.errorMessages.password}</FormErrorMessage>
          ) : null}
          <Button
            onClick={submitButton}
            colorScheme="telegram"
            w={"100%"}
            size="md"
            marginTop={"6"}
          >
            Login
          </Button>
          {error.isError && error.errorMessages.message ? (
            <FormErrorMessage>{error.errorMessages.message}</FormErrorMessage>
          ) : null}
        </FormBody>
        <FormFooter
          linkTo={"/signup"}
          leftText={"Need an Account?"}
          rightText="Register now"
        />
        <FormFooter linkTo={"/login/doctor"} leftText={"Doctor's portal"} />
      </FormContainer>
    </Flex>
  );
};

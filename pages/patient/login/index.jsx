import React from "react";
import { Input, FormLabel, Button, Flex } from "@chakra-ui/react";
import {
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
} from "../../../shared/components/form";

const Login = () => {
  return (
    <Flex bg="blackAlpha.50" h="100vh" justifyContent={"center"}>
      <FormContainer>
        <FormHeader subTitle={"Patient Login Portal"} />
        <FormBody>
          <FormLabel htmlFor="email" color="gray.700">
            Email address
          </FormLabel>
          <Input id="email" type="email" isRequired bg="blackAlpha.50" mb="4" />
          {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
          <FormLabel htmlFor="password" color="gray.700">
            Password
          </FormLabel>
          <Input id="password" type="password" />
          {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
          <Button colorScheme="telegram" w={"100%"} size="md" marginTop={"6"}>
            Login
          </Button>
        </FormBody>
        <FormFooter
          linkTo={"/patient/signup"}
          leftText={"Need an Account?"}
          rightText="Register now"
        />
      </FormContainer>
    </Flex>
  );
};

export default Login;

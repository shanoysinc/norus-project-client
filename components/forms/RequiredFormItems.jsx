import React from "react";
import {
  Input,
  FormLabel,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FormBody } from "../../shared/components/form";

export const RequiredFormItems = ({
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setPhoneNumber,
  gender,
  setGender,
  age,
  setAge,
  error,
}) => {
  const emailhandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const firstNameHandler = (e) => setFirstName(e.target.value);
  const lastNameHandler = (e) => setLastName(e.target.value);
  const phoneNumberHandler = (e) => setPhoneNumber(e.target.value);
  const handleAgeChange = (newAge) => setAge(newAge);

  return (
    <FormBody isRequired={true} isInvalid={error.isError}>
      <FormLabel htmlFor="firstName" color="gray.700">
        First Name
      </FormLabel>
      <Input
        id="firstName"
        type="text"
        isRequired
        bg="blackAlpha.50"
        mb="4"
        onChange={firstNameHandler}
      />

      <FormLabel htmlFor="lastName" color="gray.700">
        Last Name
      </FormLabel>
      <Input
        id="lastName"
        type="text"
        isRequired
        bg="blackAlpha.50"
        mb="4"
        onChange={lastNameHandler}
      />

      <RadioGroup onChange={setGender} value={gender} mb="4">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="telegram" value="Male">
            Male
          </Radio>
          <Radio colorScheme="telegram" value="Female">
            Female
          </Radio>
        </Stack>
      </RadioGroup>

      <FormLabel htmlFor="age" color="gray.700">
        Age
      </FormLabel>
      <NumberInput
        id="age"
        maxW="100px"
        mr="2rem"
        min={0}
        max={120}
        value={age}
        onChange={handleAgeChange}
        bg="blackAlpha.50"
        mb="4"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <FormLabel htmlFor="phoneNumber" color="gray.700">
        Phone Number
      </FormLabel>
      <Input
        onChange={phoneNumberHandler}
        id="phoneNumber"
        type="text"
        bg="blackAlpha.50"
        mb="4"
        isRequired
      />

      <FormLabel htmlFor="email" color="gray.700">
        Email address
      </FormLabel>
      <Input
        onChange={emailhandler}
        id="email"
        type="email"
        isRequired
        bg="blackAlpha.50"
        mb="4"
      />
      {error.isError && error.errorMessages.email ? (
        <FormErrorMessage>{error.errorMessages.email}</FormErrorMessage>
      ) : null}
      <FormLabel htmlFor="password" color="gray.700">
        Password
      </FormLabel>
      <Input
        onChange={passwordHandler}
        id="password"
        type="password"
        bg="blackAlpha.50"
        mb="4"
      />
      {error.isError && error.errorMessages.password ? (
        <FormErrorMessage>{error.errorMessages.password}</FormErrorMessage>
      ) : null}

      {error.isError && error.errorMessages.message ? (
        <FormErrorMessage>{error.errorMessages.message}</FormErrorMessage>
      ) : null}
    </FormBody>
  );
};

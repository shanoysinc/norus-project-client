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
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  FormBody,
  FormContainer,
  FormFooter,
  FormHeader,
} from "../../shared/components/form";

const Signup = () => {
  const [age, setAge] = React.useState(0);
  const [gender, setGender] = React.useState("Male");
  const handleAgeChange = (newAge) => setAge(newAge);

  return (
    <Flex bg="blackAlpha.50" h="100%" justifyContent={"center"}>
      <FormContainer>
        <FormHeader subTitle={"Patient Signup Portal"} />
        <FormBody>
          <FormLabel htmlFor="firstName" color="gray.700">
            First Name
          </FormLabel>
          <Input
            id="firstName"
            type="text"
            isRequired
            bg="blackAlpha.50"
            mb="4"
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
          <Input id="phoneNumber" type="text" bg="blackAlpha.50" mb="4" />

          <FormLabel htmlFor="email" color="gray.700">
            Email address
          </FormLabel>
          <Input id="email" type="email" isRequired bg="blackAlpha.50" mb="4" />
          {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}

          <FormLabel htmlFor="password" color="gray.700">
            Password
          </FormLabel>
          <Input id="password" type="password" bg="blackAlpha.50" mb="4" />

          <Button colorScheme="telegram" w={"100%"} size="md" marginTop={"6"}>
            Sign up
          </Button>
        </FormBody>
        <FormFooter
          linkTo={"/login"}
          leftText={"Create an Appointment!"}
          rightText="Login now"
        />
        <FormFooter linkTo={"/login/doctor"} leftText={"Doctor's portal"} />
      </FormContainer>
    </Flex>
  );
};

export default Signup;

import React from "react";
import { Button, Center, Flex } from "@chakra-ui/react";
import {
  FormContainer,
  FormFooter,
  FormHeader,
} from "../../shared/components/form";
import { RequiredFormItems } from "../../components/forms/RequiredFormItems";
import { NotRequiredFormItems } from "../../components/forms/NotRequiredFormItems";
import { useErrorCheck } from "../../hooks/error/useErrorCheck";
import { useMutation } from "react-query";
import { baseApiClient } from "../../lib/axios/baseApiClient";
import validator from "validator";
import { useAuth } from "../../hooks";
import { useRouter } from "next/router";

const Signup = () => {
  const { error, setError } = useErrorCheck();
  const { setAuth } = useAuth();

  const [age, setAge] = React.useState(0);
  const [gender, setGender] = React.useState("Male");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [height, setHeight] = React.useState("N/A");
  const [weight, setWeight] = React.useState("N/A");
  const [occupation, setOccupation] = React.useState("N/A");
  const [address, setAddress] = React.useState("N/A");
  const [medicalHistoryDetails, setmedicalHistoryDetails] =
    React.useState("N/A");
  const router = useRouter();

  const mutation = useMutation(
    (signUpInfo) => baseApiClient.post("/patient/signup", signUpInfo),
    {
      onSuccess: (res) => {
        const data = res.data;
        if (data.auth) {
          setAuth(data);
          const token = data.patient.token;
          localStorage.setItem("token", token);
          router.push("/patient");
        }
      },
    }
  );

  const signUpButton = () => {
    if (firstName === "" || lastName === "" || phoneNumber === "") {
      setError({
        isError: true,
        errorMessages: {
          message: "Please enter information in all required field",
        },
      });
      return;
    }
    if (!validator.isEmail(email)) {
      setError({
        isError: true,
        errorMessages: {
          email: "Please enter a valid email",
        },
      });
      return;
    }

    if (password.length < 6) {
      setError({
        isError: true,
        errorMessages: {
          password: "Password length must be 6 or greater",
        },
      });
      return;
    }

    if (error.isError) {
      setError({ errorMessages: {}, isError: false });
    }
    mutation.mutate({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      occupation: occupation.trim(),
      medicalHistoryDetails: medicalHistoryDetails.trim(),
      email,
      age,
      gender,
      password,
      height: height.trim(),
      weight: weight.trim(),
      address: address.trim(),
      phoneNumber: phoneNumber.trim(),
    });
  };

  return (
    <Flex bg="blackAlpha.50" h="100%" justifyContent={"center"}>
      <FormContainer>
        <Center>
          <FormHeader subTitle={"Patient Signup Portal"} />
        </Center>
        <Flex wrap={"wrap"} justifyContent="center">
          <RequiredFormItems
            gender={gender}
            setGender={setGender}
            age={age}
            setAge={setAge}
            setEmail={setEmail}
            setPassword={setPassword}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhoneNumber={setPhoneNumber}
            error={error}
          />
          <NotRequiredFormItems
            setHeight={setHeight}
            setWeight={setWeight}
            setOccupation={setOccupation}
            setAddress={setAddress}
            setmedicalHistoryDetails={setmedicalHistoryDetails}
          />
        </Flex>
        <Center>
          <Button
            onClick={signUpButton}
            colorScheme="telegram"
            w={"50%"}
            size="md"
            marginTop={"6"}
          >
            Sign up
          </Button>
        </Center>

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

import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FormContainer,
  FormFooter,
  FormHeader,
} from "../../shared/components/form";
import { RequiredFormItems } from "./RequiredFormItems";
import { NotRequiredFormItems } from "./NotRequiredFormItems";

const Signup = () => {
  const [age, setAge] = React.useState(0);
  const [gender, setGender] = React.useState("Male");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [medicalHistoryDetails, setmedicalHistoryDetails] = React.useState("");

  return (
    <Flex bg="blackAlpha.50" h="100%" justifyContent={"center"}>
      <FormContainer>
        <FormHeader subTitle={"Patient Signup Portal"} />
        <Flex>
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
          />
          <NotRequiredFormItems
            setheight={setHeight}
            setWeight={setWeight}
            setOccupation={setOccupation}
            setAddress={setAddress}
            setmedicalHistoryDetails={setmedicalHistoryDetails}
          />
        </Flex>

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

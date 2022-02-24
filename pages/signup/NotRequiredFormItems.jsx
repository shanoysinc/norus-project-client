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
  Textarea,
} from "@chakra-ui/react";
import { FormBody } from "../../shared/components/form";

export const NotRequiredFormItems = ({
  setHeight,
  setWeight,
  setOccupation,
  setAddress,
  setmedicalHistoryDetails,
}) => {
  const heightHandler = (e) => setHeight(e.target.value);
  const weightHandler = (e) => setWeight(e.target.value);
  const occupationHandler = (e) => setOccupation(e.target.value);
  const addressHandler = (e) => setAddress(e.target.value);
  const medicalHistoryDetailsHandler = (e) =>
    setmedicalHistoryDetails(e.target.value);

  return (
    <FormBody isRequired={false}>
      <FormLabel htmlFor="height" color="gray.700">
        Height
      </FormLabel>
      <Input
        id="height"
        type="text"
        bg="blackAlpha.50"
        mb="4"
        onChange={heightHandler}
      />

      <FormLabel htmlFor="weight" color="gray.700">
        Weight
      </FormLabel>
      <Input
        id="weight"
        type="text"
        bg="blackAlpha.50"
        mb="4"
        onChange={weightHandler}
      />

      <FormLabel htmlFor="occupation" color="gray.700">
        Occupation
      </FormLabel>
      <Input
        onChange={occupationHandler}
        id="occupation"
        type="text"
        bg="blackAlpha.50"
        mb="4"
      />

      <FormLabel htmlFor="address" color="gray.700">
        Address
      </FormLabel>
      <Input
        onChange={addressHandler}
        id="address"
        type="text"
        bg="blackAlpha.50"
        mb="4"
      />

      <FormLabel htmlFor="medicalHistoryDetails" color="gray.700">
        MedicalHistoryDetails
      </FormLabel>
      <Textarea
        onChange={medicalHistoryDetailsHandler}
        id="medicalHistoryDetails"
        type="text"
        bg="blackAlpha.50"
        mb="4"
      />
    </FormBody>
  );
};

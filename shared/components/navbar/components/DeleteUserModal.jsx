import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuGroup,
  MenuItem,
  useDisclosure,
  Button,
  Input,
  FormLabel,
  Heading,
  Text,
  Flex,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import { baseApiClient } from "../../../../lib/axios/baseApiClient";
import { useErrorCheck } from "../../../../hooks/error/useErrorCheck";
import { useRouter } from "next/router";

export const DeleteUserModal = ({ token }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState("");
  const { error, setError } = useErrorCheck();
  const router = useRouter();
  const mutation = useMutation(
    (userPassword) =>
      baseApiClient.post("/patient/data", userPassword, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: (res) => {
        const data = res.data;
        if (data.success) {
          localStorage.removeItem("token");
          router.push("/");
        }
      },
      onError: (error) => {
        setError({
          isError: true,
          errorMessages: {
            message: error.response.data.errorMessage,
          },
        });
      },
    }
  );

  const deleteUserHandler = () => {
    if (password.length < 1) return;

    mutation.mutate({ password });
  };

  return (
    <>
      <MenuGroup title="Security">
        <MenuItem color="red" onClick={onOpen}>
          Delete Account
        </MenuItem>
      </MenuGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Security</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size={"sm"}>
              <Text color="red">Warning!!!</Text> You are about to delete all
              your personal data.Which will prevent you from login again. Please
              proceed with caution!
            </Heading>
            <Text mt="6">Enter your password to proceed</Text>

            <FormControl isRequired isInvalid={error.isError}>
              <FormLabel htmlFor="email" color="gray.700">
                Password
              </FormLabel>
              <Input
                id="email"
                type="email"
                isRequired
                bg="blackAlpha.50"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.isError && error.errorMessages.message ? (
                <FormErrorMessage>
                  {error.errorMessages.message}
                </FormErrorMessage>
              ) : null}
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" mr={3} onClick={deleteUserHandler}>
              Delete your profile
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

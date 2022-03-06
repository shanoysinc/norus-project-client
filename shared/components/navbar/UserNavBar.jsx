import React from "react";
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar,
  Spinner,
} from "@chakra-ui/react";
import { NavbarLogo } from "./components";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { baseApiClient } from "../../../lib/axios/baseApiClient";
import { useAuth } from "../../../hooks";
import { getUserToken } from "../../../lib/getUserToken";
import { DeleteUserModal } from "./components/DeleteUserModal";
import { CustomSpinner } from "../spinner/CustomSpinner";

export const UserNavBar = ({ name }) => {
  const { auth } = useAuth();
  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    () => baseApiClient.post("/user/logout"),
    {
      headers: {
        authorization: `Bearer ${getUserToken(auth)}`,
      },
      onSuccess: () => {
        localStorage.removeItem("token");
        router.push("/");
      },
      onError: () => {
        router.push("/");
      },
    }
  );

  if (isLoading) {
    return (
      <CustomSpinner color="white" message="Please wait while logging out.." />
    );
  }

  const logOutHandler = () => {
    localStorage.removeItem("token");

    mutate();
  };
  return (
    <Flex
      bg="gray.800"
      paddingX={"6"}
      paddingY={"3"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Flex alignItems="baseline">
        <Box pr={"6"}>
          <NavbarLogo />
        </Box>
      </Flex>
      <Menu>
        <MenuButton>
          <Avatar size="md" name={name} />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            {/* <MenuItem>Edit Profile</MenuItem> */}
            <MenuItem onClick={logOutHandler}>Log out</MenuItem>
          </MenuGroup>
          <MenuDivider />

          {auth && auth.patient && (
            <DeleteUserModal token={auth.patient.token} />
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
};

import React, { useEffect } from "react";

import { Grid, GridItem } from "@chakra-ui/react";
import { UserNavBar } from "../../shared/components/navbar/UserNavBar";
import { DashBoard } from "../../components/patient";
import { useAuth } from "../../hooks";
import { CustomSpinner } from "../../shared/components/spinner/CustomSpinner";

const index = () => {
  const { auth } = useAuth();

  if (!auth) {
    return <CustomSpinner />;
  }

  const patientFullName = `${auth.patient.firstName} ${auth.patient.lastName}`;

  return (
    <>
      <Grid
        h="100%"
        templateRows="repeat(24, 1fr)"
        templateColumns="repeat(24, 1fr)"
        bg="gray.700"
      >
        <GridItem rowSpan={2} colSpan={24}>
          <UserNavBar name={patientFullName} />
        </GridItem>
        <GridItem colSpan={24} rowSpan={24} rowStart="4">
          <DashBoard />
        </GridItem>
      </Grid>
    </>
  );
};

export default index;

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { UserNavBar } from "../../shared/components/navbar/UserNavBar";
import { useAuth } from "../../hooks";
import { CustomSpinner } from "../../shared/components/spinner/CustomSpinner";
import { DoctorDashboard } from "../../components/doctor/dashboard/DoctorDashboard";

const index = () => {
  const { auth } = useAuth();

  if (!auth) {
    return <CustomSpinner />;
  }

  const docFullName = `${auth.doctor.firstName} ${auth.doctor.lastName}`;
  return (
    <>
      <Grid
        h="100%"
        templateRows="repeat(24, 1fr)"
        templateColumns="repeat(24, 1fr)"
        bg="gray.700"
      >
        <GridItem rowSpan={2} colSpan={24}>
          <UserNavBar name={docFullName} />
        </GridItem>
        <GridItem colSpan={24} rowSpan={24} rowStart="4">
          <DoctorDashboard doctor={auth.doctor} docFullName={docFullName} />
        </GridItem>
      </Grid>
    </>
  );
};

export default index;

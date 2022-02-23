import Head from "next/head";
import { Center, Grid, GridItem, Link } from "@chakra-ui/react";
import { JumbotronLeft, JumbotronRight, Navbar } from "../components/welcome";
import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medicare</title>
        <meta name="description" content="medical center online app " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Grid
          h="100vh"
          templateRows="repeat(24, 1fr)"
          templateColumns="repeat(24, 1fr)"
          gap={4}
          paddingX={"16"}
        >
          <GridItem rowSpan={3} colSpan={24} rowStart="2">
            <Navbar />
          </GridItem>
          <GridItem colSpan={13} rowSpan={14} rowStart="7">
            <JumbotronLeft />
          </GridItem>
          <GridItem colSpan={14} rowSpan={14} rowStart="7">
            <JumbotronRight />
          </GridItem>
          <GridItem colSpan={24} rowSpan={4} />
        </Grid>
      </>

      <Center mb="2">
        <NextLink href="/login/doctor" passHref>
          <Link>doctor's portal</Link>
        </NextLink>
      </Center>
    </div>
  );
}

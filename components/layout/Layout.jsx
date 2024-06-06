"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from 'next/link';
import MobileNavbar from "./navbar/MobileNavbar";
import ComponentMapping from "../data/content";
import { useStateManagementStore } from "../zustand-store/state-management";
import APIData from "@/components/common/api_data";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = () => {
  const router = useRouter();
  const { setShowMenu } = useStateManagementStore;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const bgColor = useColorModeValue("white", "#121539 100%");

  useEffect(() => {
    const handleHashChange = () => {
      const targetId = id.toLowerCase();
      console.log(`Navigating to #${targetId}`);
      router.push(`#${targetId}`);
    };


    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (id) => {
    const targetId = id.toLowerCase();
    console.log(`Navigating to #${targetId}`);
    window.location.hash = targetId;
  };

  return (
    <Box bgGradient="linear(to-b, #101332, #1D225F)" w="full">
      {isDesktop ? (
        <Grid
          templateColumns={{
            lg: "25% 75%",
            xl: "20% 80%",
            "2xl": "18.75vw 80vw",
            "3xl": "20% 80%",
          }}
        >
          <GridItem w="full">
            <Sidebar titles={APIData} handleClick={handleNavigation} />
          </GridItem>
          <GridItem h="full" w="full" bgColor={bgColor}>
            <Navbar />

            {Object.keys(ComponentMapping).map((key) => {
              const Component = ComponentMapping[key];
              return (
                <Grid
                  w="100%"
                  key={Component.name}
                  id={Component.name.toLowerCase()}
                  py={{ base: 4, xl: 20 }}
                  gap={{ lg: 8, xl: "", "2xl": "" }}
                  px={{ lg: 10, xl: "20", "2xl": "20", "3xl": "80" }}
                  display="flex"
                  zIndex="-1"
                >
                  <Component />
                </Grid>
              );
            })}
          </GridItem>
        </Grid>
      ) : (
        <>
          <MobileNavbar />
          {Object.keys(ComponentMapping).map((key) => {
            const Component = ComponentMapping[key];
            return (
              <Grid
                onClick={() => setShowMenu(false)}
                key={Component.name}
                id={Component.name.toLowerCase()}
                py="12"
                templateColumns="1fr"
                gap="16"
                px="4"
                display="flex"
                borderBottom="0.8px solid #2B3039"
              >
                <Component />
              </Grid>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Layout;

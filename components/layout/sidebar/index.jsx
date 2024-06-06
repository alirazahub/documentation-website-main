"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Header from "./Header";
import { useStateManagementStore } from "@/components/zustand-store/state-management";
import FormattedTitles from "@/components/utils/FormattedTitles";
const Sidebar = ({ titles, handleClick }) => {
  const { selectedMenu, setSelectedMenu } = useStateManagementStore();
  const [isHoverSidebar, setIsHoverSidebar] = useState("");
  const color = useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)");

  return (
    <VStack
      h="100dvh"
      w={{ lg: "25%", xl: "20%", "2xl": "19%", "3xl": "20%" }}
      top="0"
      pos="fixed"
      color={useColorModeValue("#121539", "RGBA(255, 255, 255, 0.92)")}
      bg={useColorModeValue("white", "#121539")}
      borderRight="0.8px solid #2B3039"
      border={{
        base: "2px solid red",
        md: "2px solid pink",
        lg: "2px solid orange",
        xl: "2px solid blue",
        "2xl": "2px solid white",
        "3xl": "2px solid green",
        "4xl": "2px solid purple",
      }}
    >
      <Header />
      <Accordion
        pl="4"
        py="4"
        mt="32"
        mb="4"
        allowMultiple
        color="gray.500"
        allowToggle
        variant="flushed"
        w="full"
        overflow="hidden"
      >
        {titles.map((api, index) => (
          <AccordionItem
            key={index}
            border="none"
            w="full"
            onClick={() => setIsHoverSidebar(index)}
          >
            <>
              <AccordionButton justifyContent="space-between">
                <Box>
                  <Text
                    key={index}
                    color={color}
                    fontWeight="600"
                    fontSize={{ lg: "1.05rem" }}
                  >
                    {api.name}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              {isHoverSidebar == index && (
                <AccordionPanel>
                  {Object.keys(api.data).map((title, index) => (
                    <Text
                      key={index}
                      transition="transform 0.5s ease"
                      cursor="pointer"
                      rounded="md"
                      _hover={{
                        color: { color },
                        transform: "translateX(2%)",
                      }}
                      onClick={() => {
                        handleClick(title);
                        setSelectedMenu(title);
                      }}
                      transform={title === selectedMenu && "translateX(2%)"}
                      py="1"
                      color={title === selectedMenu ? color : undefined}
                      fontWeight={title === selectedMenu ? "700" : "400"}
                    >
                      <FormattedTitles title={title} />
                    </Text>
                  ))}
                </AccordionPanel>
              )}
            </>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default Sidebar;

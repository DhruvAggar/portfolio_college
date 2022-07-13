import React from "react";
import { Flex } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Text ,Heading} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex justify="space-around" align="center" marginTop="15px">
      <Heading as="h1" fontSize="30px">
        Ashish Bhandari
      </Heading>
      <HStack fontSize="20px" spacing="26px" marginTop="5px">
        <Text>About</Text>
        <Text>Skillset</Text>
        <Text>Projects</Text>
        <Text>Contact</Text>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        ></IconButton>
      </HStack>
    </Flex>
  );
}

export default Navbar;

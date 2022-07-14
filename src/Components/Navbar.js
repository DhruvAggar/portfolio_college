import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box align="center">
      <Flex w="80vw" justify="space-around" align="center" marginTop="15px">
        <Heading as="h1" fontSize="2rem">
          Ashish Bhandari
        </Heading>
        <HStack fontSize="20px" spacing="26px" marginTop="5px">
          <Text>About</Text>
          <Text>Skills</Text>
          <Text>Projects</Text>
          <Text>Contact</Text>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;

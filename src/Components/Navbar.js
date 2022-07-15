import {
  Flex,
  Box,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { Show, Hide } from "@chakra-ui/react";

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
          <Show breakpoint="(min-width: 768px)">
            <Text>About</Text>
            <Text>Skills</Text>
            <Text>Projects</Text>
            <Text>Contact</Text>
          </Show>
          <Show breakpoint="(max-width: 767px)">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Show>
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

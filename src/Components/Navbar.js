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
import { HStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { Show } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const MotionBox = motion(Box);
  const MotionText = motion(Link);

  return (
    <MotionBox
      align="center"
      marginTop={[0, 10]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true }}
    >
      <Flex
        w={["100vw", "80vw"]}
        justify={["space-between", "space-around"]}
        align="center"
        marginTop="15px"
        paddingLeft={[5, 0]}
        paddingRight={[5, 0]}
      >
        <Show breakpoint="(min-width: 768px)">
          <Heading
            as="h1"
            fontSize="2rem"
            color={isDark ? "#90a0d9" : "#2978b5"}
          >
            Ashish Bhandari.
          </Heading>
        </Show>
        <Show breakpoint="(max-width: 767px)">
          <Heading
            as="h1"
            fontSize="2.2rem"
            paddingTop={[2, 0]}
            color={isDark ? "#90a0d9" : "#2978b5"}
          >
            AB.
          </Heading>
        </Show>

        <HStack
          fontSize="20px"
          spacing="26px"
          marginTop="5px"
          color={isDark ? "#cdcdff" : "#444"}
        >
          <Show breakpoint="(min-width: 768px)">
            <MotionText
              whileHover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: `${isDark ? "#90a0d9" : "#2978b5"}`,
              }}
              as="a"
              href="#about"
            >
              About
            </MotionText>
            <MotionText
              whileHover={{
                cursor: "pointer",
                textDecoration: "underline",

                color: `${isDark ? "#90a0d9" : "#2978b5"}`,
              }}
              as="a"
              href="#skills"
            >
              Skills
            </MotionText>

            <MotionText
              whileHover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: `${isDark ? "#90a0d9" : "#2978b5"}`,
              }}
              as="a"
              href="#projects"
            >
              Projects
            </MotionText>
            <MotionText
              whileHover={{
                cursor: "pointer",
                textDecoration: "underline",
                color: `${isDark ? "#90a0d9" : "#2978b5"}`,
              }}
              as="a"
              href="#contact"
            >
              Contact
            </MotionText>
          </Show>

          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            color={isDark ? "#90a0d9" : "#2978b5"}
            bg="noBackground"
          />
          <Show breakpoint="(max-width: 767px)">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
                border="noBorder"
                onHover={{}}
              />
              <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </HStack>
      </Flex>
    </MotionBox>
  );
}

export default Navbar;

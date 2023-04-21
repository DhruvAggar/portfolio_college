import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: "5", md: "8" }}
      marginTop="30px"
      color={isDark ? "#cdcdff" : "#444"}
    >
      <hr style={{ marginBottom: "15px" }} />
      <HStack spacing={{ base: "4", md: "5" }} justify="center">
        <Text fontSize={[12, 16]} color="subtle">
          &copy; {new Date().getFullYear()} Dhruv Aggarwal. All rights
          reserved.
        </Text>
        <Stack direction="row" justify="top">
          <ButtonGroup variant="ghost">
            <IconButton
              color={isDark ? "white" : "#171515"}
              as="a"
              href="https://www.github.com/ashishgits"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              color="#0A66C2"
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              color="#1DA1F2"
              as="a"
              href="https://www.twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </HStack>
    </Container>
  );
}

export default Footer;

import Card from "./Card";
import calculator from "../assets/calculator.png";
import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      direction="column"
      align="center"
      marginTop="30px"
      color={isDark ? "#cdcdff" : "#444"}
      as={motion.flex}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      height="100vh"
      id="projects"
    >
      <Box align="center">
        <Heading margin="4rem 0 4rem 0" fontSize={"2.5rem"}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing="5" w="60vw" justifyItems="center">
          <Card
            title="Calculator"
            text="Made with React"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with React"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with React"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with React"
            alt="cal-pic"
            src={calculator}
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Projects;

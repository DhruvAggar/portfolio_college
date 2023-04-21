import Card from "./Card";
import calculator from "../assets/calculator.png";
import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const MotionFlex = motion(Flex);
  return (
    <MotionFlex
      direction="column"
      align="center"
      marginTop="30px"
      color={isDark ? "#cdcdff" : "#444"}
      height="100vh"
      id="projects"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
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
        </SimpleGrid>
      </Box>
    </MotionFlex>
  );
}

export default Projects;

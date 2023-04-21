import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

function Skills() {
  const MotionFlex = motion(Flex);
  const MotionSimpleGrid = motion(SimpleGrid);

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <MotionFlex
      id="skills"
      direction="column"
      align="center"
      color={isDark ? "#cdcdff" : "#444"}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
      height="100vh"
    >
      <Box align="center" w="98vw">
        <Heading margin="0 0 2rem 0" fontSize={"2.5rem"}>
          Skills
        </Heading>
        <MotionSimpleGrid
          w={["100vw", "60vw"]}
          columns={[3, 4]}
          spacing="16"
          p="10"
          justifyItems="center"
          rounded="lg"
          color="gray.400"
          fontSize="3rem"
        >
          <AiFillHtml5 color="#f06529" />
          <IoLogoCss3 color="#2965f1" />
          <SiJavascript color="#f7df1e" />
          <FaReact color="#61dbfb" />
          <FaNodeJs color="green" />
          <SiExpress color="black" />
          <SiMongodb color="green" />
          <SiCplusplus color="royalBlue" />
        </MotionSimpleGrid>
      </Box>
    </MotionFlex>
  );
}

export default Skills;

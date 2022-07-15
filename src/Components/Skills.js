import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
} from "react-icons/si";

function Skills() {
  return (
    <Flex direction="column" align="center">
      <Box align="center" w="100vw">
        <Heading margin="4rem 0 2rem 0" fontSize={"2.5rem"}>
          Skills
        </Heading>
        <SimpleGrid
          w={["100vw", "60vw"]}
          columns={[3, 4]}
          spacing="16"
          p="10"
          justifyItems="center"
          rounded="lg"
          color="gray.400"
          fontSize="3rem"
        >
          <AiFillHtml5 color="red" />
          <IoLogoCss3 color="blue" />
          <SiJavascript color="gold" />
          <FaReact color="cyan" />
          <FaNodeJs color="green" />
          <SiExpress color="black" />
          <SiMongodb color="green" />
          <SiCplusplus color="royalBlue" />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Skills;

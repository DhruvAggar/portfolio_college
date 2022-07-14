import React from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

function Skills() {
  return (
    <Flex direction="column" align="center">
      <Box align="center">
        <Heading margin="4rem 0 2rem 0">Skills</Heading>
        <SimpleGrid
          w="60vw"
          columns={{ sm: 2, md: 4 }}
          spacing="8"
          p="10"
          justifyItems="center"
          rounded="lg"
          color="gray.400"
          fontSize="3rem"
        >
          <AiFillHtml5 />
          <IoLogoCss3 />
          <IoLogoJavascript />
          <FaReact />
          <FaNodeJs />
          <SiExpress />
          <SiMongodb />
          <SiCplusplus />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Skills;

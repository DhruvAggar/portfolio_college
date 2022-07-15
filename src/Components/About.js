import React from "react";
import { Flex,Box,Heading, Text,IconButton,Stack,ButtonGroup } from "@chakra-ui/react";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

function About() {
  return (
    <Flex direction="column" align="center">
      <Box
        w="60vw"
        // border="2px solid red"
        marginTop="100px"
        marginBottom="5rem"
      >
        <Heading marginBottom="2rem" Align="center">
          Hi, This is Ashish Bhandari_
        </Heading>
        <Text paddingBottom="10px">
          A budding{" "}
          <Text display="inline" color="ff63c3">
            {" "}
            computer engineer
          </Text>{" "}
          and{" "}
          <Text display="inline" color="ff63c3">
            {" "}
            developer
          </Text>
          , currently pursuing computer science as a pre-final year student at
          Delhi Technical Campus, Delhi, India.
        </Text>
        <Text>
          I am good at{" "}
          <Text display="inline" color="ff63c3">
            problem solving
          </Text>{" "}
          and
          <Text display="inline" color="ff63c3">
            {" "}
            analytical thinking
          </Text>
          . I practise in coding contests regularly to brush up my core DSA
          skills, simultaneously working on development skills to build
          eye-catching and usable websites and web apps.
        </Text>
        <Stack
          direction="row"
          justify="center"
          marginTop="2rem"
        >
          <ButtonGroup variant="ghost" >
            <IconButton
              as="a"
              href="#"
              aria-label="Codechef"
              icon={<SiCodechef fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              href="https://www.github.com/ashishgits"
              aria-label="Codeforces"
              icon={<SiCodeforces fontSize="1.5rem" />}
            />
            <IconButton
              as="a"
              href="https://www.twitter.com"
              aria-label="Leetcode"
              icon={<SiLeetcode fontSize="1.5rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Box>
    </Flex>
  );
}

export default About;

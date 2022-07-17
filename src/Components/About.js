import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  const MotionFlex = motion(Flex);
  const MotionIconButton = motion(IconButton);
  return (
    <MotionFlex
      direction="column"
      align="center"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 1.5, stiffness: 120 }}
      height="100vh"
      color="#444"
    >
      <Box w={["92vw", "60vw"]} marginTop="100px" marginBottom="5rem">
        <Heading marginBottom="2rem" fontSize={["2.5rem"]}>
          Hi, I'm{" "}
          <Text display="inline" color="#2978b5">
            Ashish 👋
          </Text>
        </Heading>
        <Text paddingBottom="10px" fontSize={"1.1rem"}>
          A budding{" "}
          <Text display="inline" color="#2978b5">
            {" "}
            computer engineer
          </Text>{" "}
          and{" "}
          <Text display="inline" color="#2978b5">
            {" "}
            developer
          </Text>
          , currently pursuing computer science as a pre-final year student at
          Delhi Technical Campus, Delhi, India.
        </Text>
        <Text fontSize={"1.1rem"}>
          I am good at{" "}
          <Text display="inline" color="#2978b5">
            problem solving
          </Text>{" "}
          and
          <Text display="inline" color="#2978b5">
            {" "}
            analytical thinking
          </Text>
          . I practise in coding contests regularly to brush up my core DSA
          skills, simultaneously working on development skills to build
          eye-catching and usable websites and web apps.
        </Text>
        <Stack direction="row" justify="center" marginTop="2rem">
          <ButtonGroup variant="ghost">
            <MotionIconButton
            whileHover={{scale:1.1}}
              as="a"
              href="https://www.codechef.com/users/ashishbh04"
              aria-label="Codechef"
              icon={<SiCodechef fontSize="1.5rem" />}
            />
            <MotionIconButton
            whileHover={{scale:1.1}}
              as="a"
              href="https://codeforces.com/profile/ashishbh04"
              aria-label="Codeforces"
              icon={<SiCodeforces fontSize="1.5rem" />}
            />
            <MotionIconButton
            whileHover={{scale:1.1}}
              as="a"
              href="https://leetcode.com/ashishb0410/"
              aria-label="Leetcode"
              icon={<SiLeetcode fontSize="1.5rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Box>
    </MotionFlex>
  );
}

export default About;

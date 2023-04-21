import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const MotionBox = motion(Box);
  return (
    <MotionBox
      marginTop="100px"
      marginBottom="50px"
      color={isDark ? "#cdcdff" : "#444"}
      id="contact"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
      height="40vh"
    >
      <Stack Spacing={10} w={["400px", "700px"]} margin="auto">
        <Heading
          as="h2"
          margin="30px 0 30px 0"
          fontSize={["2.1rem", "2.5rem"]}
          textAlign={"center"}
        >
          It's your turn to say Hello!
        </Heading>
        <Input placeholder="Name" color={isDark ? "#cdcdff" : "#444"} />
        <Input placeholder="Say Hi!" color={isDark ? "#cdcdff" : "#444"} />
        <Button colorScheme="blue" bgColor={isDark ? "#90a0d9" : "#2978b5"}>
          Submit
        </Button>
      </Stack>
    </MotionBox>
  );
}

export default Contact;

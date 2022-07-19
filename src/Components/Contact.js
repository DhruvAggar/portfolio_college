import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/color-mode";

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      marginTop="100px"
      marginBottom="50px"
      color={isDark ? "#cdcdff" : "#444"}
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="contact"
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
    </Box>
  );
}

export default Contact;

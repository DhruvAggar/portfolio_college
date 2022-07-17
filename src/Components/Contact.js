import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Box
      marginTop="100px"
      marginBottom="50px"
      color="#444"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        <Input placeholder="Name" />
        <Input placeholder="Say Hi!" />
        <Button colorScheme="blue" bgColor="#2978b5">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default Contact;

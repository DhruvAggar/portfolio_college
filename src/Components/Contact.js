import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Input, Stack } from "@chakra-ui/react";

function Contact() {
  return (
    <Box marginTop="100px" marginBottom="50px" >
      <Stack Spacing={10} w={["400px", "700px"]} margin="auto">
        <Heading
          as="h2"
          margin="30px 0 30px 0"
          fontSize={["2.1rem","2.5rem"]}
          textAlign={"center"}
        >
          It's your turn to say Hello!
        </Heading>
        <Input placeholder="Name" />
        <Input placeholder="Say Hi!" />
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </Box>
  );
}

export default Contact;

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading, Input, Stack } from "@chakra-ui/react";

function Contact() {
  return (
    <div style={{marginTop:"100px", marginBottom:"50px"}}>
      <Stack Spacing={10} width="700px" margin="auto">
        <Heading as="h2" margin="50px"paddingLeft="50px">
          It's your turn to say Hello!
        </Heading>
        <Input placeholder="Name" />
        <Input placeholder="Say Hi!" />
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </div>
  );
}

export default Contact;

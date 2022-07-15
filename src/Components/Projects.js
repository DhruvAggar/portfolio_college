import Card from "./Card";
import calculator from "../assets/calculator.png";
import { Box, Flex, SimpleGrid, Heading } from "@chakra-ui/react";

function Projects() {
  return (
    <Flex direction="column" align="center" marginTop="30px">
      <Box align="center">
        <Heading margin="4rem 0 4rem 0" fontSize={"2.5rem"}>Projects</Heading>
        <SimpleGrid columns={[1,2]} spacing="5" w="60vw" justifyItems="center">
          <Card
            title="Calculator"
            text="Made with react"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with react"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with react"
            alt="cal-pic"
            src={calculator}
          />

          <Card
            title="Calculator"
            text="Made with react"
            alt="cal-pic"
            src={calculator}
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default Projects;

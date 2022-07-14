import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import calculator from "../assets/calculator.png";

function Card(props) {
  const { title, text, imgsrc, alt } = props;
  return (
    <Box width="250px">
      <Image
        src={calculator}
        alt={alt}
        height="200px"
        width="250px"
        borderRadius="15px"
      />
      <Heading as="h3" fontSize="25px" fontWeight="500" align="center">
        {title}
      </Heading>
      <Text align="center">{text}</Text>
    </Box>
  );
}

export default Card;

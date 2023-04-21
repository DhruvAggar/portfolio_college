import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import calculator from "../assets/calculator.png";

function Card(props) {
  const { title, text, imgsrc, alt } = props;
  return (
    <Box
      width={["380px", "250px"]}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
    >
      <Image
        src={calculator}
        alt={alt}
        height="200px"
        width={["380px", "250px"]}
        borderRadius="15px"
      />
      <Heading
        as="h3"
        fontSize="25px"
        fontWeight="500"
        align="center"
        marginTop="10px"
      >
        {title}
      </Heading>
      <Text align="center" marginBottom={"3"}>
        {text}
      </Text>
    </Box>
  );
}

export default Card;

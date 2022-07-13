import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex align="center" justify="center" fontSize="sm" opacity="0.8">
      <AiOutlineCopyrightCircle />
       {new Date().getFullYear()} Ashish Bhandari. All Rights Reserved.
    </Flex>
  );
}

export default Footer;

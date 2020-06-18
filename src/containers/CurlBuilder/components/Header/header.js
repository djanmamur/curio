import React from "react";
import { Flex, Box, Text } from "@chakra-ui/core";

export default ({ actions, cartTotal, selectedLocationId }) => {
  return (
    <Flex background="black" width="100vw" mb="4">
      <Text color="white" pl="4" fontSize="lg">
        CURL BUILDER
      </Text>
    </Flex>
  );
};

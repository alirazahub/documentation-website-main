import React from "react";
import { Code, VStack } from "@chakra-ui/react";

const Example = () => {
  return (
    <VStack w="full" borderRadius="md" textAlign="left" gap="0">
      <Code p="2" w="full" h="full" bg="gray.700">
        BASE URL
      </Code>
      <Code p="2" w="full" h="full" bg="gray.500">
        https://api.stripe.com
      </Code>
    </VStack>
  );
};

export default Example;

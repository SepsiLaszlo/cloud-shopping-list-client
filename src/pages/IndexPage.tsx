import { VStack, StackDivider, Box } from "@chakra-ui/react";
import * as React from "react";

export const IndexPage: React.FC = (props) => {
  return (
    <>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
       <Box>1</Box>
      </VStack>
    </>
  );
};

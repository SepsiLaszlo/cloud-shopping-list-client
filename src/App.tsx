import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Center,
  Flex,
  Square,
  background,
  
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import {Helmet} from "react-helmet";

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage></IndexPage>,
  },
  {
    path: "/x",
    element: <div>Hello x world!</div>,
  },
]);

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Helmet bodyAttributes={{'bgcolor':'red'}}>
      
    </Helmet>
    <Box bg="red" height="100%">
      <Box bg="green" maxWidth="1000px" mx="auto">
        <RouterProvider router={router} />
      </Box>
    </Box>
  </ChakraProvider>
);

import React from "react";
import "./App.css";
import CurlBuilder from "./containers/CurlBuilder/curlBuilder";
import theme from "./theme";
import { Flex, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        flex={1}
        align="center"
        justify="space-between"
      >
        <Flex flex={1} align="flex-start">
          <CurlBuilder />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;

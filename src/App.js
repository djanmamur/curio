import React from "react";
import "./App.css";
import CurlBuilder from "./containers/CurlBuilder/curlBuilder";
import JsonValidator from "./containers/JSONValidator/jsonValidator";
import XmlValidator from "./containers/XMLValidator/xmlValidator";
import theme from "./theme";
import {
  Flex,
  ThemeProvider,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        flexDirection="column"
        flex={1}
        justify="center"
        alignContent="center"
        align="center"
      >
        <Flex>
          <Stack isInline>
            <Tabs isFitted width="640px">
              <TabList role="tablist">
                <Tab _selected={{ color: "white", bg: "blue.500" }}>
                  CURL Builder
                </Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>
                  JSON Validator
                </Tab>
                <Tab _selected={{ color: "white", bg: "orange.400" }}>
                  XML Validator
                </Tab>
              </TabList>
              <TabPanels m="20px">
                <TabPanel>
                  <CurlBuilder />
                </TabPanel>
                <TabPanel>
                  <JsonValidator />
                </TabPanel>
                <TabPanel>
                  <XmlValidator />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;

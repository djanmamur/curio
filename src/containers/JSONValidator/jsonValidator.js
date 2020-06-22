import React, { useState, useEffect } from "react";
import {
  Stack,
  Flex,
  Text,
  Button,
  Input,
  Textarea,
  Checkbox,
  useToast,
} from "@chakra-ui/core";

const JsonValidator = () => {
  const toast = useToast();
  const [jsonBody, setJsonBody] = useState("");

  const handleChangeJson = (event) => {
    setJsonBody(event.target.value);
  };
  const formatJsonBody = () => {
    try {
      if (jsonBody) {
        let parsedJsonBody = JSON.stringify(JSON.parse(jsonBody), null, 2);
        setJsonBody(parsedJsonBody);
      }
    } catch (e) {
      toast({
        position: "top-right",
        title: "Cannot validate JSON",
        description: e.toString(),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center">
      <Stack>
        <Textarea
          placeholder="Enter JSON to format and validate body"
          m="4"
          marginTop="6"
          p="4"
          size="5"
          maxWidth="600px"
          minWidth="600px"
          height="70vh"
          overflow="scroll"
          value={jsonBody}
          onChange={handleChangeJson}
        />
        <Stack isInline>
          <Button
            onClick={formatJsonBody}
            m="4"
            variantColor="green"
            size="md"
            width="80px"
          >
            Format
          </Button>
          <Button
            onClick={formatJsonBody}
            m="4"
            variantColor="red"
            size="md"
            width="80px"
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default JsonValidator;

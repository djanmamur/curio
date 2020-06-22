import React, { useState, useEffect } from "react";
import MethodTag from "./components/tags";
import { Stack, Flex, Text, Input, Textarea, Checkbox } from "@chakra-ui/core";
import Header from "./components/Header/header";

const CurlBuilder = () => {
  const [methodName, setMethod] = useState("");
  const [url, setUrl] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const [curl, setCurl] = useState("curl");
  const [jsonContent, setJsonContent] = useState(
    "-H 'Content-type: application/json'"
  );
  const [verbose, setVerbose] = useState("-v");

  useEffect(() => {
    handleCurlChange(methodName, url, requestBody);
  }, [url, methodName, requestBody, jsonContent, verbose]);

  const handleMethodChange = (event) => {
    setMethod(`${event.target.name}`);
  };

  const handleChangeURL = (event) => {
    setUrl(event.target.value);
  };

  const handleVerboseChange = (event) => {
    if (event.target.checked) {
      setVerbose("-v");
    } else {
      setVerbose("");
    }
  };

  const handleJsonContentChange = (event) => {
    if (event.target.checked) {
      setJsonContent("-H 'Content-type: application/json'");
    } else {
      setJsonContent("");
    }
  };

  const handleChangeRequestBody = (event) => {
    setRequestBody(`${event.target.value}`);
  };

  const handleCurlChange = (method = "", url = "", body = "") => {
    if (method) {
      method = `-X${method}`;
    }
    if (body) {
      body = `-d ${body}`;
    }

    setCurl(`curl ${verbose} ${method} ${body} ${jsonContent} ${url}`);
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      position="sticky"
      backgroundColor="cyan"
      top={0}
    >
      <Stack spacing={8} isInline textAlign="center" marginTop="6">
        <MethodTag
          label="POST"
          color="red"
          size="lg"
          onClick={handleMethodChange}
        />
        <MethodTag
          label="GET"
          color="blue"
          size="lg"
          onClick={handleMethodChange}
        />
        <MethodTag
          label="PUT"
          color="orange"
          size="lg"
          onClick={handleMethodChange}
        />
        <MethodTag
          label="PATCH"
          color="green"
          size="lg"
          onClick={handleMethodChange}
        />
        <MethodTag
          label="DELETE"
          color="gray"
          size="lg"
          onClick={handleMethodChange}
        />
      </Stack>

      <Stack spacing={10} isInline m="3">
        <Checkbox
          size="md"
          variantColor="green"
          defaultIsChecked
          onChange={handleJsonContentChange}
        >
          Content-Type JSON
        </Checkbox>
        <Checkbox
          size="md"
          variantColor="orange"
          defaultIsChecked
          onClick={handleVerboseChange}
        >
          Verbose
        </Checkbox>
      </Stack>

      <Input
        placeholder="Enter URL"
        margin="4"
        width="600px"
        value={url}
        onChange={handleChangeURL}
      />

      <Textarea
        placeholder="Enter request body"
        margin="4"
        width="600px"
        value={requestBody}
        onChange={handleChangeRequestBody}
      />
      <Text>Your CURL:</Text>
      <Textarea margin="4" width="600px" value={curl} />
    </Flex>
  );
};

export default CurlBuilder;

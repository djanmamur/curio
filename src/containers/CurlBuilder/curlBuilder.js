import React, { useState, useEffect } from "react";
import MethodTag from "./components/tags";
import { Stack, Flex, Text, Input, Textarea } from "@chakra-ui/core";
import Header from "./components/Header/header";

const CurlBuilder = () => {
  const [methodName, setMethod] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [requestBody, setRequestBody] = React.useState("");
  const [curl, setCurl] = React.useState("curl");

  useEffect(() => {
    handleCurlChange(methodName, url, requestBody);
  }, [url, methodName, requestBody]);

  const handleMethodChange = event => {
    setMethod(`${event.target.name}`);
  };

  const handleChangeURL = event => {
    setUrl(event.target.value);
  };

  const handleChangeRequestBody = event => {
    setRequestBody(`${event.target.value}`);
  };

  const handleCurlChange = (method = "", url = "", body = "") => {
    if (method) {
      method = `-X${method}`;
    }
    if (body) {
      body = `-d ${body}`;
    }
    setCurl(`curl ${method} ${body} ${url}`);
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      position="sticky"
      backgroundColor="cyan"
      top={0}
    >
      <Header></Header>
      <Stack spacing={8} isInline textAlign="center">
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
          color="gray"
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

      <Input
        placeholder="Enter URL"
        margin="4"
        width="500px"
        value={url}
        onChange={handleChangeURL}
      />

      <Textarea
        placeholder="Enter request body"
        margin="4"
        width="500px"
        value={requestBody}
        onChange={handleChangeRequestBody}
      />
      <Text>Your CURL:</Text>
      <Textarea margin="4" width="500px" value={curl} />
    </Flex>
  );
};

export default CurlBuilder;

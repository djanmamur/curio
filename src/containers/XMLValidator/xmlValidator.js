import React, { useState } from "react";
import { Stack, Flex, Button, Textarea, useToast } from "@chakra-ui/core";

const XmlValidator = () => {
  const toast = useToast();
  const [xmlBody, setXmlBody] = useState("");

  const handleChangeXml = (event) => {
    setXmlBody(event.target.value);
  };
  const formatXmlBody = () => {
    try {
      if (xmlBody) {
        var xmlDoc = new DOMParser().parseFromString(
          xmlBody,
          "application/xml"
        );
        var xsltDoc = new DOMParser().parseFromString(
          [
            // describes how we want to modify the XML - indent everything
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
            '  <xsl:strip-space elements="*"/>',
            '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
            '    <xsl:value-of select="normalize-space(.)"/>',
            "  </xsl:template>",
            '  <xsl:template match="node()|@*">',
            '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
            "  </xsl:template>",
            '  <xsl:output indent="yes"/>',
            "</xsl:stylesheet>",
          ].join("\n"),
          "application/xml"
        );

        var xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsltDoc);
        var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
        var resultXml = new XMLSerializer().serializeToString(resultDoc);
        setXmlBody(resultXml);
      }
    } catch (e) {
      toast({
        position: "top-right",
        title: "Cannot validate XML",
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
          placeholder="Enter XML to format and validate body"
          m="4"
          marginTop="6"
          p="4"
          size="5"
          maxWidth="600px"
          minWidth="600px"
          height="70vh"
          overflow="scroll"
          value={xmlBody}
          onChange={handleChangeXml}
        />
        <Stack isInline>
          <Button
            onClick={formatXmlBody}
            m="4"
            variantColor="green"
            size="md"
            width="80px"
          >
            Format
          </Button>
          <Button
            onClick={formatXmlBody}
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

export default XmlValidator;

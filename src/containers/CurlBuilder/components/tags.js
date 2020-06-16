import React from "react";
import { Button } from "@chakra-ui/core";

export default ({
  label = "http method",
  color = "cyan",
  size = "md",
  onClick
}) => {
  return (
    <Button variantColor={color} margin="1" onClick={onClick} name={label}>
      {label}
    </Button>
  );
};

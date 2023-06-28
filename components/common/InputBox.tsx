import React from "react";
import { InputBase, InputProps } from "@mui/material";
import { grey } from "@mui/material/colors";

const InputBox = (props: InputProps) => {
  return (
    <InputBase
      sx={{
        backgroundColor: grey[100],
        borderRadius: "10px",
        padding: "6px 15px",
      }}
      {...props}
    />
  );
};

export default InputBox;

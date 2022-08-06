import React from "react";
import { Checkbox } from "@mui/material";
import styled from "styled-components";

const CheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const CheckboxLabel = styled.label`
  font-size: 12px;
  width: 70%;
`;

const CheckboxLab = ({ children, ...props }) => {
  return (
    <CheckboxStyle>
      <Checkbox
        {...props}
        sx={{
          p: 0,
          mr: 1,
          color: "white",
          "&.Mui-checked": {
            color: "red",
          },
        }}
      />
      <CheckboxLabel>{children} </CheckboxLabel>
    </CheckboxStyle>
  );
};

export default CheckboxLab;

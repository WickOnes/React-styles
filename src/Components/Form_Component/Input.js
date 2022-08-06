import React from "react";
import styled from "styled-components";

let InputStyle = styled.input`
  border: 1px solid grey;
  background: none;
  width: 100%;
  height: 40px;
  margin-top: 15px;
  color: white;
  padding-left: 10px;
  :focus {
    outline: none;
    border: ${(props) => props.border};
  }
`;

const Input = ({ border, ...props }) => {
  return <InputStyle {...props} border={border}></InputStyle>;
};

export default Input;

import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  color: white;
  background: ${(props) => props.background};
  border: none;
  height: 30px;
  border-radius: 10px;
  font-size: 12px;
  margin-top: 10px;
`;

const Button = ({ textButton, disabled, background, ...props }) => {
  // function handleEvent(e){
  //     e.preventDefault();
  //   }
  return (
    <ButtonStyle {...props} background={background} disabled={disabled}>
      {textButton}
    </ButtonStyle>
  );
};

export default Button;

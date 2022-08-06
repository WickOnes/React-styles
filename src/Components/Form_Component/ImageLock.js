import React from "react";
import styled from "styled-components";

const BoxImgText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;

  `;
  const LockeImg = styled.div`
    background: red;
    background-image:url(${props => props.backgroundImage}) ;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-bottom: 10px;
  `;


const LogoForm = ({ text,backgroundImage }) => {
  
  return (
    <BoxImgText>
      <LockeImg backgroundImage = {backgroundImage} />
      <p>{text}</p>
    </BoxImgText>
  );
};

export default LogoForm;

import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled, LoginStyle, LogoStyle } from "./StyleHeader";




const Header = () => {
  return (
    <HeaderStyled>
      <NavLink to="/React-styles/">
        <LogoStyle />
      </NavLink>
      <NavLink to="/sign_in">
        <LoginStyle>Login</LoginStyle>
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Form_Component/Button";
import CheckboxLab from "../Form_Component/CheckboxLab";
import { LogoStyle } from "../Header/StyleHeader";
import Input from "../Form_Component/Input";
import LogoForm from "../Form_Component/ImageLock";
import {
  BoxStyle,
  Copiright,
  FormStyle,
  LinkWrapper,
  LoginStyled,
} from "./StyleSign_In";
import { useValidations } from "../validationForm";

const SignIn = () => {
  const colorActiveButton = "blue";
  const [activeButton, setActiveButton] = useState(true);
  const [buttonColor, setButtonColor] = useState("");
  const mail = useValidations();
  const password = useValidations();
  const checkbox = useValidations();

  function setStore(e) {
    e.preventDefault();
    if (
      localStorage.getItem("passwordRegistration") === password.value &&
      localStorage.getItem("mailRegistration") === mail.value
    ) {
      alert(
        `Welcome ${localStorage.getItem(
          "firstNameRegistration"
        )} ${localStorage.getItem("lastNameRegistration")} !!!!`
      );
      if (checkbox.checkboxValue) {
        localStorage.setItem("mail", mail.value);
        localStorage.setItem("password", password.value);
      }
    } else {
      alert("Такого користувача не знайдено");
    }
  }

  useEffect(() => {
    mail.localStoreValueMail();
    password.localStoreValuePassword();
  }, []);

  useEffect(() => {
    if (mail.valid && password.valid) {
      setActiveButton(false);
      setButtonColor(colorActiveButton);
    } else {
      setActiveButton(true);
      setButtonColor("");
    }
  }, [mail.valid, password.valid]);

  return (
    <BoxStyle>
      <NavLink to="/React-styles/">
        <LogoStyle />
      </NavLink>
      <LoginStyled>
        <LogoForm
          backgroundImage="https://cdn-icons-png.flaticon.com/512/565/565547.png"
          text="Sign in"
        />
        <FormStyle>
          <Input
            onChange={(e) => mail.focusValue(e)}
            border={mail.colorInput}
            type="email"
            placeholder="Email address*"
            value={mail.value}
          />
          <Input
            onChange={(e) => password.focusValue(e)}
            border={password.colorInput}
            type="password"
            placeholder="Password*"
            value={password.value}
          />
          <CheckboxLab
            onClick={(e) => checkbox.focusValue(e)}
            children="Remeber me"
          />
          <Button
            onClick={setStore}
            background={buttonColor}
            disabled={activeButton}
            textButton="SIGN IN"
          />
        </FormStyle>
        <LinkWrapper>
          <Link to="/React-styles/">Forgot password?</Link>
          <Link to="/sign_up">Don't have an account? Sign up</Link>
        </LinkWrapper>
        <Copiright>Copyright © Your Website 2020</Copiright>
      </LoginStyled>
    </BoxStyle>
  );
};

export default SignIn;

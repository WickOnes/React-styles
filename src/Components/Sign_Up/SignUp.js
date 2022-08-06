import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoStyle } from "../Header/StyleHeader";
import Button from "../Form_Component/Button";
import Input from "../Form_Component/Input";
import CheckboxLab from "../Form_Component/CheckboxLab";
import {
  BoxStyle,
  Copiright,
  FormStyle,
  LoginStyled,
} from "../Sign_In/StyleSign_In";
import LogoForm from "../Form_Component/ImageLock";
import { LinkWrapperSignUp, NameLastName } from "./StyleSign_Up";
import { useValidations } from "../validationForm";

const SignUp = () => {
  const colorActiveButton = "blue";
  const [activeButton, setActiveButton] = useState(true);
  const [buttonColor, setButtonColor] = useState("");
  const mail = useValidations();
  const password = useValidations();
  const firstName = useValidations();
  const lastName = useValidations();
  const checkbox = useValidations();

  function setStore(e) {
    e.preventDefault();
    localStorage.setItem("mailRegistration", mail.value);
    localStorage.setItem("passwordRegistration", password.value);
    localStorage.setItem("firstNameRegistration", firstName.value);
    localStorage.setItem("lastNameRegistration", lastName.value);
    window.location.assign("http://localhost:3000/");
  }

  useEffect(() => {
    if (mail.valid && password.valid && firstName.valid && lastName.valid) {
      setActiveButton(false);
      setButtonColor(colorActiveButton);
    } else {
      setActiveButton(true);
      setButtonColor("");
    }
  }, [mail.valid, password.valid, firstName.valid, lastName.valid]);

  return (
    <BoxStyle>
      <NavLink to="/">
        <LogoStyle />
      </NavLink>
      <LoginStyled>
        <LogoForm
          backgroundImage="https://cdn-icons-png.flaticon.com/512/565/565547.png"
          text="Sign up"
        />
        <NameLastName>
          <Input
            onChange={(e) => firstName.focusValue(e)}
            border={firstName.colorInput}
            type="text"
            placeholder="First name*"
            value={firstName.value}
          />
          <Input
            onChange={(e) => lastName.focusValue(e)}
            border={lastName.colorInput}
            type="text"
            placeholder="Last name*"
            value={lastName.value}
          />
        </NameLastName>
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
            checked={checkbox.checkboxValue}
            children="I wont to recive inspiration, marketing promotions and update via email."
          />
          <Button
            onClick={setStore}
            background={buttonColor}
            disabled={activeButton}
            type="submit"
            textButton="SIGN IN"
          />
        </FormStyle>

        <LinkWrapperSignUp>
          <Link to="/sign_in">Already have an account? Sign in</Link>
        </LinkWrapperSignUp>
        <Copiright>Copyright © Your Website 2020</Copiright>
      </LoginStyled>
    </BoxStyle>
  );
};

export default SignUp;

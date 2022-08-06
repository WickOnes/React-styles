import { useEffect, useState } from "react";

export const useValidations = () => {
  const colorAccapte = "2px solid green";
  const colorError = "2px solid red";
  const [colorInput, setColorInput] = useState(colorError);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [typeValue, setTypeValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(true);

  function focusValue(e) {
    setValue(e.target.value);
    setTypeValue(e.target.type);
    setCheckboxValue(e.target.checked);
  }
  function localStoreValuePassword() {
    if (localStorage.getItem("password")) {
      setValue(localStorage.getItem("password"));
      setValid(true);
      setColorInput(colorAccapte);
    }
  }
  function localStoreValueMail() {
    if (localStorage.getItem("mail")) {
      setValue(localStorage.getItem("mail"));
      setValid(true);
      setColorInput(colorAccapte);
    }
  }

  function localStoreValueName() {
    if (localStorage.getItem("name")) {
      setValue(localStorage.getItem("name"));
      setValid(true);
      setColorInput(colorAccapte);
    }
  }
  function localStoreValueLastName() {
    if (localStorage.getItem("lastName")) {
      setValue(localStorage.getItem("lastName"));
      setValid(true);
      setColorInput(colorAccapte);
    }
  }

  function inputMail() {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(String(value).toLocaleLowerCase())) {
      let checkEmail = [];
      let inputMail = value.split(/@|\.|\//, 3);

      if (inputMail.length === 3) {
        checkEmail = inputMail.map((el) => (el.length >= 2 ? el.length : 0));
      }
      if (checkEmail[0] > 2 && checkEmail[1] > 1 && checkEmail[2] > 1) {
        setValid(true);
        setColorInput(colorAccapte);
      } else {
        setValid(false);
        setColorInput(colorError);
      }
    } else {
      setValid(false);
      setColorInput(colorError);
    }
  }

  function inputPassword() {
    if (value.length >= 8) {
      let arrBig = [];
      let arrSmall = [];
      let arrValue = value.split("");
      arrValue.map((el) =>
        typeof el !== "number" && el.toLocaleLowerCase() === el
          ? arrSmall.push(el)
          : arrBig.push(el)
      );
      if (arrBig.length > 0 && arrSmall.length > 0) {
        setValid(true);
        setColorInput(colorAccapte);
      } else {
        setValid(false);
        setColorInput(colorError);
      }
    } else {
      setValid(false);
      setColorInput(colorError);
    }
  }

  function inputName() {
    if (value.length > 2) {
      setValid(true);
      setColorInput(colorAccapte);
    } else {
      setValid(false);
      setColorInput(colorError);
    }
  }

  useEffect(() => {
    switch (typeValue) {
      case "email":
        inputMail();
        break;

      case "password":
        inputPassword();
        break;

      case "text":
        inputName();
        break;

      default:
    }
  }, [value]);

  return {
    colorInput,
    focusValue,
    valid,
    value,
    typeValue,
    checkboxValue,
    localStoreValuePassword,
    localStoreValueMail,
    localStoreValueName,
    localStoreValueLastName,
  };
};

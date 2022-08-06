import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";

const Global = createGlobalStyle`
*{
  font-family: Roboto Condensed;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);

import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import SignIn from "./Components/Sign_In/SignIn";
import SignUp from "./Components/Sign_Up/SignUp";

const MainStyle = styled.div`
  background: black;
  min-height: 745px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainStyle>
      <Router>
        <Route path="/React-styles/" exact component={Header} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/sign_up" component={SignUp} />
      </Router>
    </MainStyle>
  );
}

export default App;

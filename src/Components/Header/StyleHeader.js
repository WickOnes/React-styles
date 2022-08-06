import "../../fonts/fonts.css";
import styled from "styled-components";



export const HeaderStyled = styled.div`
color: white;
font-weight: 700;
height: 30%;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const LoginStyle = styled.p`
color: #aa00a2;
text-shadow: 0 0 25px blue, 0 0 5px darkblue;
font-size: 30px;
:hover {
  text-shadow: 0 0 25px yellow, 0 0 5px darkblue;
  color: red;
}
`;
export const LogoStyle = styled.div`
height: 150px;
width: 150px;
margin-bottom: 50px;
background-image: url("http://pngimg.com/uploads/alien/small/alien_PNG28.png");
background-size: cover;
`;
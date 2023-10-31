import Nav from "../nav/Nav";
import styled from "styled-components";

function Header (props) {
  return (
    <HeaderStyled>
      <h1>{props.title}</h1>
      <Nav/>
    </HeaderStyled>
  )
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
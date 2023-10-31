import styled from "styled-components";

function Nav() {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="/">Article 1</a>
        </li>
        <li>
          <a href="/">Article 2</a>
        </li>
        <li>
          <a href="/">Article 3</a>
        </li>
      </ul>
    </NavStyled>
  )
};

const NavStyled = styled.nav`
 ul {
  display: flex;
  list-style: none;
  li {
    padding: 0 8px;
  }
 }
`;

export default Nav;
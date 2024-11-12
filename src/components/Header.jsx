import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Div>
      <img src={logo} alt="Image Logo" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
  }
`;

export default Header;

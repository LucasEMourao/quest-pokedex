import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokeBallOpen from "../../assets/poke-ball-open.png"

export const ButtonToReturn = () => {
  const navigate = useNavigate();
  return (
    <BackButton onClick={() => navigate("/")}>
      <img src={PokeBallOpen} alt="Button to return" />
    </BackButton>
  );
};

const BackButton = styled.button`
  position: absolute;
  margin: 4px;
  top: 0;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 48px;
  }
  &:hover{
    transform: scale(1.05);
  }
  transition: 0.3s ease;
`;
import styled from "styled-components";
import PokeBall from "../../assets/poke-ball.png"

export const ButtonToReload = () => {
    return (
      <ButtonLoad onClick={() => window.location.reload()}>
        <img src={PokeBall} alt="Button to reload" />
      </ButtonLoad>
    )
  }

  const ButtonLoad = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 50px;
    border-radius: 50%;
    }
    &:hover {
    transform: scale(1.05);
  }
  transition: 0.3s ease;
`

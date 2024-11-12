import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  text-align: center;
  padding: 24px;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 730px;
    margin: 0 auto;
  }
  li {
    margin: 12px;
    text-align: center;
    padding: 12px;
    border: solid ${(props) => props.theme.color} 1px;
    border-radius: 16px;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
  a {
    text-decoration: none;
  }
  p {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.color};
  }
`;

export const ShowMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  border: solid ${(props) => props.theme.color} 1px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

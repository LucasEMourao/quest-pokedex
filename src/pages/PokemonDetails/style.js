import styled from "styled-components";

export const DetailContainer = styled.div`
  position: relative;
  margin: 48px auto;
  padding: 18px;
  max-width: 50vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: solid ${(props) => props.theme.color} 2px;
  border-radius: 16px;
  transition: all 0.3s ease;

  h2 {
    text-transform: capitalize;
    margin-bottom: 18px;
    padding: 4px;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 120px;
`;

export const Section = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  h3 {
    margin-bottom: 12px;
  }
  ul {
    padding: 8px;
  }
  li {
    text-transform: capitalize;
    margin: 4px;
  }
`;

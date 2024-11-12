import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Times New Roman', Times, serif;
        background-color: ${(props) => props.theme.background};
        transition: all 0.3s ease;        
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyle;

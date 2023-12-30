import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    
    html,body {
        font-size:62.5%; //10px
        font-family: "Jalnan2";
        line-height: 1.3;
        color: #333;
    }
    @font-face {
        font-family: "Jalnan2";
        src: url("/fonts/Jalnan2.ttf");
    }
    
    a {
        color: #333;
        text-decoration: none;
    }

    img {
        -webkit-user-drag: none;
        user-drag: none;
    }
`;

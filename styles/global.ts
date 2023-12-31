import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        width: 1.4rem;
    }

    *::-webkit-scrollbar-track {
        background: #fff;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #d6d6d6;
        border-radius: 1.3rem;
        border: 0.1rem none #ffffff;
    }

    html,body {
        font-size:62.5%; //10px
        font-family: "Jalnan2";
        line-height: 1.3;
        color: #333;

        @media screen and (max-width: 768px) {
            font-size:55%; //10px
        }
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

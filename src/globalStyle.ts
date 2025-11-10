import {createGlobalStyle } from 'styled-components'
import 'styled-components';

declare module 'styled-components' {
export interface DefaultTheme {
    titleTheme: string;
    background: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    textMenu: string;
    border: string;
    transparent: string;
    error: string;
}}
export const  GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;

    }
    html{
      background-color: ${props=>props.theme.background};
    }
    a{
      text-decoration: none;
      border: none;
    }
    button , input{border:none}

    a , p , h1 , h2 , h3 , h4 , h5 , h6 , span{
      margin: 0;
    };
    
    main{
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${props=>props.theme.background};
    }

`
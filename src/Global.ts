import {createGlobalStyle} from "styled-components";
import Segoe from "./assets/fonts/segoe/SegoeUI.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Segoe';
    src: url(${Segoe}) format('ttf');
  }
  
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    
  }
  
  body {
    margin: 0;
    font-family: 'Segoe', sans-serif;
  }
`;
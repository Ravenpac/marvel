import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #84848D;
    --red: #FF0000;
    --dark-red: #400E0E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width:1080px) {
      font-size: 93.75%;
    }

    @media(max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #000;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Bold'), url(../assets/fonts/AxiformaBold.otf) format('TrueType');
   font-weight: 700;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Semibold'), url(../assets/fonts/AxiformaSemibold.otf) format('TrueType');
   font-weight: 600;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Medium'), url(../assets/fonts/AxiformaMedium.otf) format('TrueType');
   font-weight: 500;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Regular'), url(../assets/fonts/AxiformaRegular.otf) format('TrueType');
   font-weight: 400;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Light'), url(../assets/fonts/AxiformaLight.otf) format('TrueType');
   font-weight: 300;
 }

 @font-face {
   font-family: 'Axiforma';
   src: local('Axiforma Thin'), url(../assets/fonts/AxiformaThin.otf) format('TrueType');
   font-weight: 100;
 }

 @font-face {
   font-family: 'Marvel' ;
   src: local('Marvel Regular'), url(../assets/fonts/MarvelRegular.ttf) format('TrueType');
 }
`;

export default GlobalStyle;

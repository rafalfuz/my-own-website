import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';
import backgroundImage from '../assets/backgroundWallpaper/wp8.jpg';
import backgroundImageMobile from '../assets/backgroundWallpaper/portrait-wp6.jpg'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-image: url(${backgroundImage});

    @media ${device.mobile}{
      background-image: url(${backgroundImageMobile});
      background-repeat: no-repeat;
      background-color: black;
      background-attachment: fixed;
      background-size: cover;
    }
    @media ${device.tablet}{
      background-image: url(${backgroundImageMobile});
      background-repeat: no-repeat;
      background-color: black;
      background-attachment: fixed;
      background-size: cover;
    }
  }
`;

export default GlobalStyle;

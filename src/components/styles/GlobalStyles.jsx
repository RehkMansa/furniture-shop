import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    text-transform: 
  }
*::first-letter {
  text-transform: capitalize;
}

  

  * {
    margin: 0;
  }
  :root{
    --gold: #FFC700;
    --black: #222222;
    --gray: #555555;
    --blue: #B8E1E3;
  }
  html, body {
    height: 100%;
  }
    a:link,
    a:visited{
      color:var(--black);
      text-decoration: none;
      font-size: 16px;
  }


  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Red Hat Display', sans-serif;
    color: var(--gray);
    font-size: 20px;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--black);
  }
  #root, #__next {
    isolation: isolate;
  }
  .row{
    display: flex;
  }
  .flex{
    display: flex;
  }
  .center{
    justify-content: center;
    align-items:center;
  }

  .column{
    flex-direction: column;
  }
  button, input{
    outline:none;
    border: none;
  }

  

  button{
    background-color: var(--gold);
    color: var(--black);
    padding: 16px 32px;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
  }

  .btn-info{
    background-color: var(--blue);
  }

`;

export default GlobalStyle;

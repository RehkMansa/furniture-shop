import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
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
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Red Hat Display', sans-serif;
    color: var(--gray);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
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

  .center{
    justify-content: center;
    align-items:center;
  }

  .column{
    flex-direction: column;
  }
  button, input{
    outline:none;
  }

  body{
    padding: 0 3%;
  }

  button{
    background-color: var(--gold);
    color: var(--black)
    padding: 10px 20px;
  }

  .btn-info{
    background-color: var(--blue);
  }

`;

export default GlobalStyle;

import styled from 'styled-components';
import GlobalStyle from './components/styles/GlobalStyles';

const AppContainer = styled.main``;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <h3>Hello World</h3>
    </AppContainer>
  );
}

export default App;

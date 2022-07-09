import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import HomePageLayout from './components/HomePageLayout';
import GlobalStyle from './components/styles/GlobalStyles';

const AppContainer = styled.main``;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;

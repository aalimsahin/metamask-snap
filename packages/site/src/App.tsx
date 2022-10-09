import styled, { ThemeProvider } from 'styled-components';
import { useStyling, useTheme } from 'hooks';
import { Footer, Header, Home } from 'components';
import { MetaMaskProvider } from 'context';
import { light, dark, GlobalStyle } from 'config/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
`;

function App() {
  const { theme, toggleTheme } = useTheme();
  useStyling();

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <MetaMaskProvider>
        <GlobalStyle />
        <Wrapper>
          <Header handleToggleClick={toggleTheme} />
          <Home />
          <Footer />
        </Wrapper>
      </MetaMaskProvider>
    </ThemeProvider>
  );
}

export default App;

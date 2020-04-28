import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import Container from './components/container';
import Menu from './components/menu';


function App() {
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={ theme }>
          <Container>
            <Menu/>
          </Container>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default App;

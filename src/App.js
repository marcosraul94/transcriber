import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from './components/container';
import Menu from './components/menu';



function App() {
  return (
    <>
      <CssBaseline>
        <Container>
          <Menu/>
        </Container>
      </CssBaseline>
    </>
  );
}

export default App;

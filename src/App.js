import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import theme from './styles/theme';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertState>
        <Wrapper>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </Router>
        </Wrapper>
      </AlertState>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default App;

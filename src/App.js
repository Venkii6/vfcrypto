import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import reset from 'styled-reset'
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'


const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  height: 100%;
  flex-direction: column;

`


class App extends Component {
  render() {
    return (
        <Router>
          <Wrapper>
            <Header />
          </Wrapper>
        </Router>
    );
    
  }
}

export default App;

import React from 'react';
import LogoHibrido from './assets/logo-hibrido.svg'; 
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header';

function App() {
  return (
    <>
        <GlobalStyle />
        <Header />
        <h1>Hibrido Store</h1>
        <img src={LogoHibrido} className="App-logo" alt="logo" />
    </>
  );
}

export default App;

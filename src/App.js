import React from 'react';
import styled from "styled-components"

import LoginBox from "./components/loginBox/Index";

import './App.css';

const AppContainer = styled.div`
  width:100%;
  margin-top: 80px;
  height: 100%;
  display: flex;
  flex-direction:column
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <LoginBox/>
    </AppContainer>
  );
}

export default App;

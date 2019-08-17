import React from 'react';
// import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';

import {LandingPage} from './LandingPage';

import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

import './App.css';

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
`;


function App() {
  return (
    <div className="App">
      <h3> Protected Routes</h3>
      
      <Route 
        exact path = '/'
        render = { () => <LandingPage routeProp = {"some route prop info passed in"} />   } 
      />


      <PacmanLoader
        css={override}
        sizeUnit={"px"}
        size={50}
        color={'dodgerblue'}
        border = '1px solid black'
      />
    </div>
  );
}

export default App;

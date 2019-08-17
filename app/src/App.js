import React from 'react';
// import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';

import {LandingPage} from './LandingPage';
import {ProtectedPage} from './ProtectedPage';

import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';

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
      <RingLoader
      css={override}
      sizeUnit={"px"}
      size={50}
      color={'deeppink'}
      border = '1px solid black'
    />


    <Route 
    exact path = '/'
    render = { (props) => <LandingPage {...props} routeProp = {"render prop passed into LandingPage"} />   } 
    />
    <Route 
    exact path = '/protected'
    render = { (props) => <ProtectedPage {...props } routeProp = {"render prop passed into ProtectedPage"} />   } 
    />

    </div>
  );
}

/*
      
      <Route 
        exact path = '/'
        component = {LandingPage} 
      />
      <Route 
      exact path = '/protectedApp'
      component = {ProtectedPage}
      />

          <Route 
        exact path = '/'
        render = { () => <LandingPage routeProp = {"render prop passed into LandingPage"} />   } 
      />


      <Route 
      exact path = '/protected'
      render = { () => <ProtectedPage {...props } routeProp = {"render prop passed into ProtectedPage"} />   } 
      />
*/

export default App;

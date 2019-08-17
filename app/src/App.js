import React from 'react';
// import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import {Button, Container} from 'semantic-ui-react';

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
    <Container fluid style = {{margin: `20px`, padding: `10px`, border: `3px solid seagreen`}}>
      <h3> Protected Routes - App component</h3>
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

    </Container>
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

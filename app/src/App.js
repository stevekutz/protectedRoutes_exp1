import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import {LandingPage} from './LandingPage';
import {ProtectedPage} from './ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';
import {NotFoundPage} from './NotFoundPage';

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
      <h3>App component</h3>
      <RingLoader
      css={override}
      sizeUnit={"px"}
      size={50}
      color={'deeppink'}
      border = '1px solid black'
      />


      <Switch>
        <Route 
          exact path = '/'
          render = { (props) => <LandingPage {...props} routeProp = {"render prop passed into LandingPage"} />   } 
        />
        <ProtectedRoute 
          exact path = '/protected'
          routeProp = {"render prop passed into ProtectedPage"}
          component = {ProtectedPage}
        />

        <Route 
          path = '*' 
          render = { (props) => <NotFoundPage  {...props} notFoundProp = {"404 not found prop"} />}
        />
      </Switch>

    </Container>
  );
}

export default App;


/*  After ProtectedRoute created, we can replace the original Route 
    <ProtectedRoute 
    exact path = '/protected'
    component = {ProtectedPage}
    />
*/


/* This breaks
    <Route 
    exact path = '/protected'
    render = { (props) => <ProtectedPage {...props } routeProp = {"render prop passed into ProtectedPage"} />   } 
    />
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) 
but got: undefined. You likely forgot to export your component from the file it's defined in, 
or you might have mixed up default and named imports.


*/





/*     old way

      <Route 
        exact path = '/'
        component = {LandingPage} 
      />
      <Route 
      exact path = '/protected'
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



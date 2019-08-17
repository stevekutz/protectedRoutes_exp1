import React from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import {Button, Container} from 'semantic-ui-react';
import auth from './auth'; // lower-case >>> we are expect instance of auth obj

        // auth.login called with a callback when login successful & will 
        // redirect user to the protected route

const override = css`
    display: flex;
    margin: 20px auto;
    border-color: red;
`;

export const LandingPage = (props) => {
    console.log(props);

    return (
        <Container fluid>
            <h4> Landing Page </h4>
          <h5>{props.routeProp}</h5>
        
              <Button 
                inverted color = 'green'
                onClick = { () => {
                     auth.login( () => {
                         props.history.push('/protected'); 
                    }); 
                }}
            
                > Login </Button>
            <PacmanLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={'dodgerblue'}
            />

        </Container>
    )

}
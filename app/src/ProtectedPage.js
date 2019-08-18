import React from 'react';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';
import {Button, Container} from 'semantic-ui-react';
import auth from './auth';

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
`;

export const ProtectedPage = (props) => {
    console.log(props);

    return (
        <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid deeppink`}}>
            <h4> Protected Page </h4>
            <h5>{props.routeProp}</h5>
            <ClimbingBoxLoader
            css={override}
            sizeUnit={"px"}
            size={10}
            color={'seagreen'}
            border = '1px solid black'
          />

          <Button 
            inverted color = 'red'
            onClick = { () => { auth.logout( () =>  props.history.push('/') )}        
            }  > Logout  </Button>
        </Container>
    )

}

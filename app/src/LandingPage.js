import React from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';
import {Button} from 'semantic-ui-react';

const override = css`
    display: flex;
    margin: 20px auto;
    border-color: red;
`;

export const LandingPage = (props) => {
    console.log(props);

    return (
        <div>
            <h4> Protected React Router Used</h4>
            <h5>{props.routeProp}</h5>
            <Button inverted color = 'green'> GOTO </Button>
            <PacmanLoader
                css={override}
                sizeUnit={"px"}
                size={20}
                color={'dodgerblue'}
            />

        </div>
    )

}
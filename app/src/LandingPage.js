import React from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
`;

export const LandingPage = (props) => {
    console.log(props);

    return (
        <div>
            <h4> Protected React Router Used</h4>
            <h5>{props.routeProp}</h5>
            <PacmanLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={'dodgerblue'}
            border = '1px solid black'
          />

        </div>
    )

}
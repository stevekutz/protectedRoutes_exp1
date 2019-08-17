import React from 'react';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
`;

export const ProtectedPage = (props) => {
    console.log(props);

    return (
        <div>
            <h4> Protected Page </h4>
            <h5>{props.routeProp}</h5>
            <ClimbingBoxLoader
            css={override}
            sizeUnit={"px"}
            size={10}
            color={'seagreen'}
            border = '1px solid black'
          />

        </div>
    )

}

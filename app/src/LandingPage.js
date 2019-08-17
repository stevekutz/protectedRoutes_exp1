import React from 'react';



export const LandingPage = (props) => {
    console.log(props);

    return (
        <div>
            <h4> Protected React Router Used</h4>
            <h5>{props.routeProp}</h5>
        </div>
    )

}
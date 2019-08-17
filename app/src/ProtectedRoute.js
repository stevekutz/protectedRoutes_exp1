import React from 'react';
import {Route} from 'react-router-dom';


// we will pass in Component as a DESCTRUCTURED prop, the remaining
// as passed into  ...rest
export const ProtectedRoute = ({component: Component, ...rest}  ) => {
    return (
        <Route 
            {...rest}   // RESTRUCTURING here
            render = { (props) => {
                return <Component {...props} />
            }}
        />

    )
}

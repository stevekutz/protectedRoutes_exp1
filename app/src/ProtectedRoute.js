import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// now we import auth to verify login status 
import auth from './auth';

// we will pass in Component as a DESTRUCTURED prop, the remaining
// as passed into  ...rest
export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}  //RESTRUCTURED HERE
            render = { (props) => {
                // verify authenticated before returning component
                if( auth.isAuthenticated() ){
                    return <Component  {...props}/>
                }
                else {
                    return <Redirect to = {
                        {
                            pathname: '/',
                            state: {from: props.location}
                        }
                    }/>
                }
                
            }}
        />

    )
}

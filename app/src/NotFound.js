import React from 'react';
import {Button, Container} from 'semantic-ui-react';

export const NotFound = (props) => {
    return (
        <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid olive`}}>
           <p> 404 not found </p>  
        
            <Button 
                inverted color = 'olive'
                onClick = { () => props.history.push('/') }        
            >Back to Landing page</Button>

        </Container>
    )
}

/*
          <Button 
            inverted color = 'red'
            onClick = { () => { auth.logout( () =>  props.history.push('/') )}        
            }  > Logout  
         </Button>

*/
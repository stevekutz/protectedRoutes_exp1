import React from 'react';
import {Button, Container, Icon} from 'semantic-ui-react';

export const NotFound = (props) => {
    return (
        <Container style = {{ border: `1px solid olive`, margin: `20px`, padding: `10px`}}>
           <p> {props.notFoundProp} </p>  
        
            <Button style = {{ border: '1px solid black', margin: `5px` }}
                inverted color = 'olive'
                onClick = { () => props.history.push('/') }        
            >
            <Icon name='exclamation' />
            Back to Landing page</Button>

            <Button
                inverted color = 'pink'
                onClick = { () => props.history.push('/') } 
            >
                <Icon name = 'exclamation'/>
                <Button.Content> another way to get back to Landing Page</Button.Content>
                
            </Button>


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
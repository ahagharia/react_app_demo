import React from 'react';
import { Segment, Header } from "semantic-ui-react";
const MyHeader = ({name}) => {
    return (
        <Segment inverted padded>
            <Header as='h1' color='olive' textAlign='center'>Hello {name}</Header>
            
        </Segment>
    )
}

export default MyHeader;
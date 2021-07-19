import React from 'react';
import { Segment, Header } from "semantic-ui-react";
const MyHeader = ({name}) => {
    return (
        <Segment padded basic>
            <Header as='h1' textAlign='center'>Aabid's Personal Room</Header>
        </Segment>
    )
}

export default MyHeader;
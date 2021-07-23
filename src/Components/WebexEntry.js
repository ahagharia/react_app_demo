import React, { Component } from 'react'
import { Header, Segment, Grid, GridColumn, Button, Icon, Image, Dropdown } from "semantic-ui-react";

const options = [
    {
        key: 'Audio Connection',
        text: 'Audio Connection',
        disabled: true
    },
    {
        key: 'Computer',
        value: 'Audio: Use Computer audio',
        content: (
            <Header icon='headphones' content='Audio: Use Computer audio' as='h5'/>
        ),
        text: (
            <Header icon='headphones' content='Audio: Use Computer audio' as='h5'/>
        )
    },
    {
        key: 'CallIn',
        value: 'Call In',
        content: (
            <Header icon='call' content='Call In' as='h5'></Header>
        ),
        text: (
            <Header icon='call' content='Call In' as='h5'></Header>
        )
    },
    {
        key: 'Don\'t connect to Audio',
        value: 'Don\'t connect to Audio',
        content: (
            <Header icon='ban   ' content='Don&#39;t connect to Audio' as='h5'></Header>
        ),
        text: (
            <Header icon='ban   ' content='Don&#39;t connect to Audio' as='h5'></Header>
        )
    }
]

const WebexEntry = () => (
    <Grid centered >
        <Grid.Row>
            <Grid.Column textAlign='center' >
                <Segment>
                    <Segment textAlign='center' basic padded className="Web-Ex-Height"><Image src='https://infosys.webex.com/webappng/images/avatars/aa.png' size='medium' circular /></Segment>
                    <Segment basic>
                        <Grid>
                            <Grid.Row columns={3} stretched verticalAlign='middle'>
                                <Grid.Column>

                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic> 
                                        <Button circular fluid>
                                            <Dropdown
                                                inline
                                                options = {options}
                                                defaultValue = {options[1].value}
                                            />
                                        </Button>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment textAlign="center" basic><a href='www.google.com'><Icon name='setting'/>Test Speaker and Microphone</a></Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={10} textAlign='center'>
                <Button circular size='large'><Icon name='mute' color='red'/>Unmute</Button>
                <Button circular size='large'><Icon name='video' color='red'/>Start Video</Button>
                <Button circular size='large' color='green'>Join Meeting</Button>
            </Grid.Column>
        </Grid.Row>
        
    </Grid>
)

export default WebexEntry
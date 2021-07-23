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
            <span>
                <Icon name='headphones'/> Audio: Use Computer audio
            </span>
            // <Header icon='headphones' content='Audio: Use Computer audio' as='h5'/>
        ),
        text: (
            <span>
                <Icon name='headphones'/> Audio: Use Computer audio
            </span>
        )
    },
    {
        key: 'CallIn',
        value: 'Call In',
        content: (
            <span>
                <Icon name='call'/> Call In
            </span>
        ),
        text: (
            <span>
                <Icon name='call'/> Call In
            </span>
        )
    },
    {
        key: 'Don\'t connect to Audio',
        value: 'Don\'t connect to Audio',
        content: (
            <span>
                <Icon name='ban'/> Don't connect to Audio
            </span>
        ),
        text: (
            <span>
                <Icon name='ban'/> Don't connect to Audio
            </span>
        )
    }
]

const WebexEntry = () => (
    <Grid centered >
        <Grid.Row>
            <Grid.Column textAlign='center' >
                <Segment>
                    <Segment textAlign='center' basic padded className="Web-Ex-Height"><Image src='https://infosys.webex.com/webappng/images/avatars/a.png' size='medium' circular /></Segment>
                    <Segment basic>
                        <Grid>
                            <Grid.Row columns={3} stretched verticalAlign='middle'>
                                <Grid.Column>

                                </Grid.Column>
                                <Grid.Column>
                                    {/* <Segment basic>  */}
                                        <Button circular size='medium' >
                                            <Dropdown  
                                                inline
                                                options = {options}
                                                defaultValue = {options[1].value}
                                            />
                                        </Button>
                                    {/* </Segment> */}
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
                <Button className = "White-Button" circular size='medium' ><Icon name='mute' color='red'/>Unmute</Button>
                <Button className="White-Button" circular size='medium'><Icon name='video' color='red'/>Start Video</Button>
                <Button circular size='medium' color='green'>Join Meeting</Button>
            </Grid.Column>
        </Grid.Row>
        
    </Grid>
)

export default WebexEntry
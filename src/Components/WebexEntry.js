import React, { Component } from 'react'
import { Header, Segment, Grid, GridColumn, Button, Icon } from "semantic-ui-react";

const WebexEntry = () => (
    <Grid centered>
        <Grid.Row>
            <Grid.Column textAlign='center' >
                <Segment>
                    <Segment textAlign='center' basic padded className="Web-Ex-Height" ><Icon name='play' size='massive' /></Segment>
                    <Segment basic>
                        <Grid>
                            <Grid.Row columns={3} stretched verticalAlign='middle'>
                                <Grid.Column>

                                </Grid.Column>
                                <Grid.Column>
                                    <Segment basic> 
                                        <Button circular fluid>Audio: Use Computer audio</Button></Segment>
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
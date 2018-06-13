import React, { Component } from 'react';
import MediaBridge from './MediaContainer.js'
// import CommunicationContainer from './CommunicationContainer.js'
import io from 'socket.io-client'

class RoomPage extends Component {
    constructor(props) {
        super(props);
    }

    getUserMedia = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).catch(e => alert('getUserMedia() error: ' + e.name))

    socket = io.connect()

    componentWillMount() {
    }

    render(){
        return (
            <div>
                <MediaBridge media={media => this.media = media} socket={this.socket} getUserMedia={this.getUserMedia} />
                {/*<CommunicationContainer socket={this.socket} media={this.media} getUserMedia={this.getUserMedia} />*/}
            </div>
        );
    }
}

export default RoomPage
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SimpleWebRTC from 'simplewebrtc';
import CommunicationContainer from './CommunicationContainer.js'

const remoteVideos = []
var webrtc

class RoomPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: '',
            message: '',
            peers: 0,
            audio: true,
            video: true
        }
    }

    toggleAudio = () => {
        const audio = this.state.audio
        if(webrtc){
            if(audio) webrtc.mute()
            else webrtc.unmute()
            this.setState({
            audio: !audio
            })
        }
    }

    toggleVideo = () => {
        const video = this.state.video
        if(webrtc){
            if(video) webrtc.pauseVideo()
            else webrtc.resumeVideo()
            this.setState({
            video: !video
            })
        } 
    }

    renderRemoteVideos = () => remoteVideos.map((value,index)=>{
        return(
            <video key={index} className="remoteVideo"></video>
        ) 
    })

    componentWillMount() {
    }

    componentWillUnmount(){
        webrtc.leaveRoom();
        webrtc.disconnect();
    }

    componentDidMount() {
        const roomname = "publicroom" + window.location.pathname.split('/')[2]
        console.log("roomname",roomname)

        webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos
            remoteVideosEl: 'remoteVideos',
            // immediately ask for camera access
            autoRequestMedia: true
        });

        const remotecontainer = webrtc.getRemoteVideoContainer()
        console.log(remotecontainer)

        webrtc.on('readyToCall', function () {
            // you can name it anything
            webrtc.joinRoom(roomname);

        });

        webrtc.on('connectionReady', function (sessionId) {
            console.log("sessionId",sessionId)
            console.log(webrtc.getPeers(sessionId))
        })
        webrtc.on('createdPeer', function(peers){
                console.log('peers',peers)
        })
        webrtc.on('videoRemoved', function(videoEl,peer){
                console.log('peer',peer)
        })

    }


    render(){
        if(this.props.logged === false) return <Redirect to="/login"/>
        return (
            <div className="room-wrapper" style={{height: window.innerHeight + "px"}} >
                <div className="video-container">
                    <video id="localVideo"></video>
                    <div id="remoteVideos"></div>
                </div>
                <CommunicationContainer audio={this.state.audio} video={this.state.video} toggleAudio={this.toggleAudio} toggleVideo={this.toggleVideo}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isLogging : state.loginData.isLogging,
        logged : state.loginData.logged,
        data: state.loginData.result
    }
}

export default connect(mapStateToProps)(RoomPage);
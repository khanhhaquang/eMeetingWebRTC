import React, { Component } from 'react';
import './main.css';
import { Link,Route,Switch ,Redirect } from "react-router-dom";
import {connect} from 'react-redux';

// import containers
import HomePage from './mainContainers/HomePage.js'
import MeetingManage from './mainContainers/MeetingManage.js'
import Document from './mainContainers/Document.js'
import TemplateRoom from './mainContainers/TemplateRoom.js'

// import components
import Comment from '../components/Comment.js'
import MainHeader from '../components/MainHeader.js'
import Footer from '../components/Footer.js'

class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        let username = "";
        if(this.props.loginType === "facebook")
            username = this.props.data.name
        if(this.props.loginType === "google")
            username = this.props.data.givenName + " " + this.props.data.familyName
        console.log("username",username)

        if(this.props.logged === false) return <Redirect to="/login"/>
        
        return(
            <div id="over">
                <Comment/>
                {/*header*/}
                <MainHeader/>

                <center>
                    <div id="outer" style={{overflow: "hidden", minHeight: "818px"}}>

                        {/* CREATE BUTTON */}
                        <div id="createBtn" name="createBtn" closesocket="" >
                            Tạo phòng họp riêng
                        </div>
                        {/* END CREATE BUTTON */}

                        <span id="welcomebar">
                            <table cellSpacing="0" cellPadding="0">
                                <tbody><tr>
                                    <td><span className="hellouser"> Xin chào {username}
                                    </span></td>
                                </tr>
                                <tr>
                                    <td style={{width: "100%"}} ><span className="menuButton"> <a href="/" className="logout closeSocket" style={{paddingRight: "0px", marginRight: "0px"}} >
                                                Thoát
                                            </a>
                                    </span> <span className="menuButton" style={{borderRight: "1px solid #007d57"}} > <a onClick={() => {return null}} id="setting">Thiết lập</a>
                                    </span> <span className="menuButton userinfo" id="userinfo" style={{borderRight: "1px solid #007d57", textAlign: "right", width: "150px"}} >
                                            <a>Tài khoản</a>
                                    </span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div id="languages" className="languages_login">
                                            <div className="vn_flag" onClick={() => {return null}} ></div>
                                            <div className="en_flag" onClick={() => {return null}} ></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody></table>
                        </span>

                        {/*<div id="logo"></div>*/}
                        {/* END WELCOME*/}

                        <div id="content">
                            <Switch>
                                <Route path="/emeeting/meetingmanage" component={MeetingManage} />
                                <Route path="/emeeting/document" component={Document} />
                                <Route path="/emeeting/templateroom" component={TemplateRoom} />
                                <Route path="/emeeting" component={HomePage} />
                            </Switch>
                        </div>
                    </div>
                </center>
                <Footer/>

            </div>
        )
    }

}
const mapStateToProps = (state) =>{
    return {
        logged : state.loginData.logged,
        loginType: state.loginData.loginType,
        data: state.loginData.result
    }
}

export default connect(mapStateToProps)(MainContent);

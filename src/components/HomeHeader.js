import React, { Component } from 'react';
import propTypes from 'prop-types';
import './homeheader.css';
import { Link } from "react-router-dom";
import logo from '../images/homePage/logo.png';
import triangle from "../images/private/triangle.png"

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            tab: "homepage"
        }
    }

    onChangeTab = (tab) => {
        this.setState({
            tab: tab
        })
    }


    render() {

        const selectedContact = this.state.tab==="contact" ? "selected" : ""
        const selectedIntroduce = this.state.tab==="tutorial" ? "selected" : ""
        return(
            <div className="Header BigRow">
                <div className="Top">
                    <div className="Row">
                        <Link to="/" onClick={() => this.onChangeTab("homepage")}><img src={logo} alt="" id="logo" /></Link>
                        <ul>
                            <li className="login_li">
                                <Link to="/login" onClick={() => this.onChangeTab("login")}>Đăng nhập</Link>
                            </li>
                            <li className={"contact_li " + selectedContact}>
                                <Link to="/contact" onClick={() => this.onChangeTab("contact")}>Liên hệ</Link>
                            </li>
                            <li className={"tutorial_li " + selectedIntroduce}>
                                <Link to="/tutorial" onClick={() => this.onChangeTab("tutorial")}>Hướng dẫn sử dụng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

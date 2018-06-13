import React, { Component } from 'react';
import propTypes from 'prop-types';
import './mainheader.css';
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
        return(
            <div className="home_header">
                    <center className="bgmenucenter">
                        <table className="menutoptb" cellSpacing="0" cellPadding="0">
                            <tbody><tr>
                                <td className="m_e"><Link to="/emeeting" className="home link  {params.controller == 'userfrontend' ? 'expanded':''}">
                                        <span className="text_m_e">Trang Chủ</span>
                                    </Link></td>
                                <td className="m_e"><Link className="link closeSocket " to="/emeeting/meetingmanage"> <span className="text_m_e">Cuộc Họp</span>
                                </Link></td>
                                <td className="m_sp"  >
                                    <Link className="link closeSocket " to="/emeeting">
                                            <div className="logo_area"></div>
                                    </Link>
                                </td>
                                <td className="m_e"><Link className="link closeSocket " to="/emeeting/document"> <span className="text_m_e">Tài liệu</span>
                                </Link></td>
                                <td className="m_e"><Link className="link closeSocket " to="/emeeting/templateroom"> <span className="text_m_e">Phòng mẫu</span>
                                </Link></td>
                            </tr>
                        </tbody></table>
                    </center>
            </div>
        )
    }
};

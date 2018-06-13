import React, { Component } from 'react';
import propTypes from 'prop-types';
import './footer.css';
import { Link } from "react-router-dom";
import phoneicon from "../images/homePage/phone_icon.png"
import footerlogo from "../images/homePage/bkav-footer-logo.png"

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="Footer BigRow">
                <div className=" Row">
                    <div className="left-footer">
                        <div className="phone_icon_div">
                            <img src={phoneicon}/>
                        </div>
                        <ul>
                            <li><a>Tổng đài: 1900 6632</a></li>
                            <li><a>Email: eMeeting@bkav.com.vn</a></li>
                        </ul>
                    </div>
                    <div className="right-footer">
                        <div className="iso-div">
                            <div className="iso-info"> ISO 27001 </div>
                            <div className="iso-info"> ISO 9001 </div>
                        </div>
                        <div className="contact">
                            <p>© 1995 - 2016 Bkav Corporation</p>
                            <ul>
                                <li className="term"><a href="../../www.bkav.com.vn/terms-of-use.html">Điều khoản sử dụng</a></li>
                                <li className="intro"><a href="../../www.bkav.com.vn/gioi-thieu.html">Giới thiệu</a></li>
                                <li><a href="contact.html">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div>
                            <img src={footerlogo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

import React, { Component } from 'react';
import './contact.css';
import Recaptcha from "react-recaptcha"

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // specifying your onload callback function
    callback = () => {
        console.log('Done!!!!');
    };
    
    // specifying verify callback function
    verifyCallback = (response) => {
        if(response){
            this.setState({
                isRecaptchaChecked: true
            })
        }
    };
    
    render() {
        return(
            <div className="contact-content">
                <div className="Row">
                    <div className="left-contact">
                        <div className="contact-info">Thông tin liên hệ</div>
                        <table>
                            <tr>
                                <td>Tổng đài</td>
                                <td className="red-text">: 1900 6632</td>
                            </tr>
                            <tr>
                                <td style={{paddingTop: "4px"}}>Email </td>
                                <td className="em-text"><span className="haicham">:</span> eMeeting@bkav.com.vn</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right-contact">
                        <div className="contact-online">Liên hệ trực tuyến</div>
                        <form id="contact_forms" name="myforms" enctype="multipart/form-data"   accept-charset="UTF-8">
                            <table cellpadding="0" cellspacing="0" width="100%" class="formprofile">
                                <tbody>
                                    <tr className="input">
                                        <td className="text-info">Họ và tên:</td>							
                                        <td className="value">
                                            <input className="text_input" type="text" id="comment_fullname" 
                                                    name="comment_fullname" autofocus="autofocus"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{paddingTop: "2px"}}>
                                            <div id="full_name_notify" className="suggestions">
                                                				
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="input">
                                        <td className="text-info">Điện thoại:</td>
                                        <td>
                                            <input className="text_input" type="text" id="comment_phone_number" 
                                                    name="comment_phone_number"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{paddingTop: "2px"}}>
                                            <div id="phone_number_notify" className="suggestions">
                                                				
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="input" style={{height: "47px"}}>
                                        <td className="text-info">Email:</td>
                                        <td  className="value">
                                            <input className="text_input" type="text" id="comment_email" 
                                                    name="comment_email"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{paddingTop: "2px"}}>
                                            <div id="email_notify" className="suggestions">
                                                				
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="area-input">
                                        <td className="text-info">Nội dung:</td>
                                        <td className="value">
                                            <div id="content_area">
                                                <textarea name="comment_textcontent" id="comment_textcontent" rows="4"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{paddingTop: "1px"}}>
                                            <div id="content_notify" className="suggestions">
                                                				
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="value " valign="top" >			
                                            <button id="submit">
                                                <span style={{lineHeight: "25px"}}>Liên hệ</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td style={{paddingTop: "30px"}}>
                                            <Recaptcha
                                            sitekey="6Ld_BlwUAAAAAGwMGacSJEgXH0Morg3Cppw1yHQo"
                                            render="explicit"
                                            verifyCallback={this.verifyCallback}
                                            onloadCallback={this.callback}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        )
    }

}

export default Contact;

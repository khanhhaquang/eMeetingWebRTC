import React, { Component } from 'react';
import propTypes from 'prop-types';
import './comment.css';
import { Link } from "react-router-dom";
import Recaptcha from "react-recaptcha"

export default class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isRecaptchaChecked: false
        }
    }

    handleSendComment = () =>{

    }

    onToggleTab = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
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
        const width = this.state.isOpen ? 417 : 34;
        return(
            <div id="comment_tab" className="btn-sprite btn-comment" title="Góp ý" href="#" style={{width: width + "px"}}>
                    <div id="comment_tab_text" className="comment_tab_text" onClick={() => this.onToggleTab()}></div>
                    <div id="comment_content">
                        <table className="maincontent_profile" id="dialog_content" cellPadding="0" cellSpacing="0" width="200px">
                            <tbody>
                                <tr>
                                    <td className="colsleft">
                                        <div className="body" id="body">
                                            
                                            <form id="comment_forms" name="myforms" method="post" action="javascript:submitSave_comment()" encType="multipart/form-data" acceptCharset="UTF-8">
                                                <div className="dialog">
                                                    <table cellPadding="0" cellSpacing="0" width="100%" className="formprofile">
                                                        <tbody>
                                                            <tr className="prop">									
                                                                <td className="value title-form">
                                                                    <b>
                                                                        Mời bạn điền thông tin góp ý tại đây
                                                                    </b>
                                                                </td>
                                                            </tr>
                                                            <tr className="prop">									
                                                                <td className="value">
                                                                    <input className="text_input" type="text" id="comment_fullname" name="comment_fullname" placeholder="Họ và tên" autoFocus="autoFocus"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="prop">
                                                                <td style={{paddingTop: "2px"}}>
                                                                    <div id="full_name_notify" className="suggestions" style={{display: "none"}} >
                                                                        <span>Bạn vui lòng nhập họ tên</span>				
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        
                                                            <tr className="prop">
                                                                <td className="value input-field">
                                                                    <input className="text_input" type="text" id="comment_email" name="comment_email" placeholder=" "/>
                                                                    <label htmlFor="comment_email">
                                                                        <span>Email</span>
                                                                        <span className="red-letter">*</span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="prop">
                                                                <td style={{paddingTop: "2px"}}>
                                                                    <div id="email_notify" className="suggestions" style={{display: "none"}}>
                                                                        <span>Bạn vui lòng nhập đúng địa chỉ email</span>				
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                                
                                                            <tr className="prop">
                                                                <td className="value">
                                                                    <input className="text_input" type="text" id="comment_phone_number" name="comment_phone_number" placeholder="Số điện thoại"/>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="prop">
                                                                <td style={{paddingTop: "2px"}}>
                                                                    <div id="phone_number_notify" className="suggestions" style={{display: "none"}}>
                                                                        <span>Bạn vui lòng nhập vào dạng số</span>				
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        
                                                            <tr className="prop">
                                                                <td className="value">
                                                                    <div id="content_area" className="input-field">
                                                                        <textarea name="comment_textcontent" id="comment_textcontent" rows="4" placeholder=" "></textarea>
                                                                        <label htmlFor="comment_textcontent">
                                                                            <span>Góp ý</span>
                                                                            <span className="red-letter">*</span>
                                                                            <span>(Bạn vui lòng soạn nội dung bằng tiếng Việt có dấu)</span>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr className="prop">
                                                                <td style={{paddingTop: "1px"}}>
                                                                    <div id="content_notify" className="suggestions" style={{display: "none"}}>
                                                                        <span>Bạn vui lòng hãy nhập nội dụng Tiếng Việt có dấu có 10 ký tự trở lên</span>				
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{paddingLeft: "62px", paddingTop: "10px"}} >
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
                                                </div>
                                            </form>					
                                        </div>
                                    </td>
                                </tr>
                                                        
                                <tr>
                                    <td className="value " valign="top">
                                        <a id="submit" onClick={this.handleSendComment} >
                                            <div className="btn_user_dialog btn_profile_dialog">
                                                Gửi
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
};

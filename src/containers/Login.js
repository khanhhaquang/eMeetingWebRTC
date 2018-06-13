import React, { Component } from 'react';
import './login.css';
import Comment from '../components/Comment.js'
import { Redirect,Link } from "react-router-dom";

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogged: false
        }
    }

    login = (type) =>{
        if(type === "facebook")
            this.setState({isLogged: true})

        if(type === "google")
            this.setState({isLogged: true})
    }

    responseGoogle = (res) =>{
        console.log(res)
    }
    responseFacebook = (res) =>{
        console.log(res)
        if(res)
        this.login("facebook")
    }

    render() {
        if(this.state.isLogged)
        return <Redirect to="/emeeting"/>

        return(
            <div id="body_div" className="loginbg">

                <Comment/>

                <input type="hidden" id="reloadsession" name="reloadsession" value="reloadsession" />

                <div className="home_header">
                    <center className="bgmenucenter">
                        <Link className="login-emeeting-icon" to="/">
                            <div></div>
                        </Link>
                    </center>
                </div>
                
                <div id="loginForm" style={{height: "763px"}}>
                <center>
                <div className="login_frame">
                    <div className="login_title"><span>Đăng nhập</span></div>
                    <div id="login_body_id" className="login_body login_body_other">
                    <div className="login_center">
                    <div className="frame_left">
                    <form>
                        <input type="hidden" name="v" value="$vTool" />
                        <table className="formlogintb" cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td height="21px"><div id="fault" style={{float:"left", fontSize:"12px", color:"#ff5800"}}></div></td>
                            </tr>
                            <tr>
                                <td >
                                <span className="login_input_wrapper">
                                    <span className="user_login"></span>
                                    <input type='text' className="login_input" id="username" name="username" autoFocus="autoFocus" placeholder="Tên đăng nhập" />						
                                </span>
                                </td>
                            </tr>
                            <tr>
                                <td height="25px"></td>
                            </tr>
                            <tr>
                                <td >
                                <span className="login_input_wrapper">
                                    <span className="pass_login"></span>
                                    <input type="password" className="login_input" id="password" name="password" placeholder="Mật khẩu" />						
                                </span>
                                </td>
                            </tr>
                            <tr>
                                <td height="25px">&nbsp;</td>
                            </tr>
                            <tr>
                                <td className="login_option">
                                
                                    <div className="remember">
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="remember" id="remember"  />
                                            </td>
                                            <td>
                                                <span className="login_remember">
                                                    Duy trì đăng nhập
                                                </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>		
                                </td>
                            </tr>
                            <tr>
                                <td>					
                                    <input className="login_btn" type="submit" value="Đăng nhập" />
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </form>
                    </div>
                    
                    <div className="frame_right">
                    <table className="formlogintb selectloginTB"  width="100%" cellSpacing="0" cellPadding="0">
                        <tbody>		
                            <tr>
                                <td style={{border: "none"}}>
                                        <GoogleLogin className="google-login login-with"
                                            clientId={'56257438052-r8hj2rs8gj4hmg5ogbkiikg1ibkm3lor.apps.googleusercontent.com'}
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                        >
                                            <span style={{marginLeft: "11px"}} className="text-login-with">Đăng nhập bằng Gmail</span>
                                        </GoogleLogin>
                                </td>
                            </tr>
                            <tr>
                                <td height="25px">&nbsp;</td>
                            </tr>		
                            <tr>
                                <td style={{border: "none"}}>
                                <FacebookLogin
                                appId="1353344334776318"
                                autoLoad={false}
                                callback={this.responseFacebook}
                                render={(e) => (
                                    <button className="fb-login login-with" onClick={e.onClick}>
                                        <span style={{marginLeft: "34px"}} className="text-login-with">Đăng nhập bằng Facebook</span>
                                    </button>
                                )}
                                />
                                </td>
                            </tr>			
                            <tr>
                                <td height="25px">&nbsp;</td>
                            </tr>	
                            <tr>
                                <td style={{border: "none"}}>
                                    <a href="https://emeeting.vn/about/introduce.html" style={{color:"#ff5800",fontSize:"13px", fontFamily:"tahoma",fontStyle: "italic"}}>Giới thiệu và Hướng dẫn sử dụng</a>
                                </td>
                            </tr>		
                        </tbody>
                    </table>
                    </div>
                    <div id="recomendBrowser_id" className="recomendBrowser">
                        <span>Lưu ý : Chất lượng họp sẽ tốt hơn nếu bạn dùng trình duyệt</span>
                        <div className="firefox_logo"><span>FireFox</span></div>
                    </div>
                    </div>
                    </div>
                </div>
                </center>
                </div> 

                <div id="footer">
                    <div className="footertext" style={{textAlign: "center"}} >© Bkav Corporation</div>
                    <div style={{display:"none", border: "none!important"}} id="commentDialog"></div>
                    <div id="createSucsess"></div>
                    <div id="loading" style={{display:"none"}}><div id="img_loading"></div></div>
                </div>
            </div>
        )
    }

}

export default Login;

import React, { Component } from 'react';
import './homepage.css';
import cols1 from "../../images/homePage/cols1.gif"
import cols2 from "../../images/homePage/cols2.jpg"
import cols3 from "../../images/homePage/cols3.jpg"
import checkboxicon from "../../images/homePage/checkbox_icon.png"
import button from "../../images/homePage/button.png"

import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
        <div className="MainIntro BigRow">

            <div className="Banner BigRow">
                <div className="Intro Row">
                    <div className="ImageBanner">
                        <div className="BannerContent">
                            <div>
                                <img src={checkboxicon}/>
                                <span>Hình ảnh, âm thanh chất lượng HD</span>
                            </div>
                            <div>
                                <img src={checkboxicon}/>
                                <span>Không giới hạn điểm cầu</span>
                            </div>
                            <div>
                                <img src={checkboxicon}/>
                                <span>Không yêu cầu đầu tư <div style={{width: "5px",display: "inline-block"}}></div>thiết bị ban đầu</span>
                            </div>
                            <div>
                                <img src={checkboxicon}/>
                                <span>Đăng nhập dễ dàng bằng Facebook, Gmail</span>
                            </div>
                            <div>
                                <Link to="/login" className="trial-login">
                                    <img alt="" src={button}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Intro Row" style={{paddingTop: "78px"}}>
                <div className="introRight">
                    <img src={cols1} alt="" id="banner"/>
                </div>

                <div className="introOne">
                    <div className="TitleIntro">
                        <h2>Họp thảo luận trực tuyến</h2>
                    </div>
                        <p>Là hình thức họp trực tuyến mà các điểm cầu có thể thảo luận, trao đổi trực tiếp với nhau thông qua việc sử dụng camera và microphone. Tất cả thành viên tham gia họp đều có quyền bật camera, microphone và có vai trò bình đẳng như nhau.</p>
                </div>

                <br />
                <div>
                    <p className="bContact">Ví dụ: Họp thảo luận nhóm làm việc...</p>
                </div>
            </div> 


            <br /> <br />

            <div className="Intro Row">
                <div className="introLeft">
                    <img src={cols2} alt="" id="banner"/>
                </div>
                <div className="introRight introTwo">
                    <div className="TitleIntro">
                        <h2>Họp giao ban trực tuyến,</h2>
                        <br/>
                        <h2>Đào tạo trực tuyến</h2>
                    </div>          
                        <p>Là hình thức họp trực tuyến mà người chủ trì có quyền sử dụng microphone và điều khiển cuộc họp. Chỉ duy nhất có 1 thành viên có quyền bật microphone và camera. Các thành viên khác muốn phát biểu phải xin quyền và được sự đồng ý của người chủ trì cuộc họp.</p>
                    <br />
                    <div>
                        <p className="bContact">Ví dụ: Họp ban lãnh đạo, Họp ban lãnh đạo với các chi</p>
                    </div>
                    <div>
                        <p className="bContact">nhánh...</p>
                    </div>
                </div>
            </div>


            <div className="Intro Row" style={{paddingBottom: "240px"}}>
                <div className="introRight imgIntro">
                    <img src={cols3} alt="" id="banner"/>
                </div>

                <div className="introThree ">
                    <div className="TitleIntro">
                        <h2>Hội nghị truyền hình</h2>
                    </div> 
                        <p>Là hình thức họp trực tuyến mà người chủ trì có quyền sử
                            dụng microphone và điều khiển cuộc họp.</p>
                        <p>Người chủ trì có quyền cho phép nhiều hơn một thành viên
                            được sử dụng microphone và camera</p>
                </div>

                <br />

                <div>
                    <p className="bContact">Ví dụ: Họp phổ biến thông tin cho các địa phương,</p>
                </div>
                <div>
                    <p className="bContact">địa bàn khác nhau...</p>
                </div>
            </div>
        </div>       
        )
    }

}

export default HomePage;

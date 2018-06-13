import React, { Component } from 'react';
import './tutorial.css';

import cols4 from '../../images/cols4.jpg'
import cols5 from '../../images/cols5.jpg'
import cols6 from '../../images/cols6.jpg'
import cols7 from '../../images/cols7.jpg'
import cols8 from '../../images/cols8.jpg'

import cols9 from '../../images/cols9.gif'
import cols10 from '../../images/cols10.gif'
import cols11 from '../../images/cols11.gif'
import cols12 from '../../images/cols12.gif'
import cols13 from '../../images/cols13.gif'

class Tutorial extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render() {
        return(
            <div className="MaintTut BigRow">
                <br/> <br/> <br/> <br/>
                <h1 className="h1-tut">HƯỚNG DẪN SỬ DỤNG EMEETING</h1>
                <br/>
                <div className="">
                    <div className="Row">
                        <h3>1.{'\u00A0'}{'\u00A0'}{'\u00A0'} Thiết lập phòng họp</h3>
                        <p>• Sử dụng phòng họp công cộng có sẵn để tham gia họp ngay</p>
                    </div>
                    <br/>

                    <div className="Row imageTut">
                        <img src={cols4} alt=""/>
                    </div>

                    <div className="Row">
                        
                        <p>• Hoặc có thể tự tạo phòng họp riêng</p>
                        
                        <br/>
                    </div>

                    <div className="Row">

                        <img src={cols5} alt=""/>
                        <p align="center" className="titleImage">Nhấn nút: “Tạo phòng họp riêng”</p>
                    
                    </div>
                    

                    <div className="Row">
                        <br/> <br/>
                        
                            <p>• Bạn nhập email của người cần mời họp. Link phòng họp sẽ
                                được gửi tới các email này.</p>
                        
                        <br/>
                    </div>

                    <div className="Tut Row">
                        <img src={cols6} alt=""/>          
                    </div>
                </div>
                <br/>
                <div className="Row">
                    <h3>2.{'\u00A0'}{'\u00A0'}{'\u00A0'} Thiết lập camera và microphone</h3>
                    <p>Bạn cần thiết lập các thông số kỹ thuật Camera, Microphone, độ
                        phân giải của Camera phù hợp trước khi vào họp. Ngoài ra, bạn cũng
                        có thể điều chỉnh lại các thông số này khi đã tham gia vào phòng
                        họp.</p>
                </div>
                <br/> <br/>
                <div className="Tut Row">
                    <img src={cols7} alt=""/>
                    <p align="center" className="titleImage">Lựa chọn Camera và Microphone trước khi vào
                        phòng họp</p>
                    
                </div>
            

                <div className="TutIn Row">
                    <img src={cols8} alt=""/>
                    <p align="center" className="titleImage">hoặc có thể thay đổi khi đã vào phòng họp.</p>
                    <br/>
                </div>
                
                <div className="Row">            
                        <p>• Yêu cầu băng thông hệ thống mỗi điểm cầu</p>            
                </div>
                <br/>
                <div className="Tut Row">
                    <img src={cols9} alt=""/>
                </div>
                
                <div className="Row">
                    <h3>3.{'\u00A0'}{'\u00A0'}{'\u00A0'} Tính năng chia sẻ màn hình</h3>
                    <p>Cho phép bạn chia sẻ màn hình máy tính. Các thành viên trong
                        phòng họp đều có thể nhìn thấy toàn bộ nội dung hiển thị trên màn
                        hình máy tính của bạn.</p>
                </div>
                <br/>
                <div className="Tut Row">
                    <img src={cols10} alt=""/>
                    <p align="center" className="titleImage">Chọn tính năng "Chia sẻ màn hình"</p>
                </div>
                
                <div className="Row">
                    <h3>4.{'\u00A0'}{'\u00A0'}{'\u00A0'} Tính năng chia sẻ tài liệu (trình chiếu)</h3>
                    <p>Cho phép bạn trình chiếu tài liệu với hầu hết các định dạng: 
                        doc, docx, xls, xlsx, ppt, pdf, jpg, png, ... tới tất cả thành
                        viên trong phòng họp.</p>
                </div>
                <br/>
                <div className="Tut Row">
                    <img src={cols11} alt=""/>
                    <p align="center" className="titleImage">Chọn tính năng "Chia sẻ tài liệu"</p>
                </div>       
                <br/>
                <div className="Row">
                    <h3>5.{'\u00A0'}{'\u00A0'}{'\u00A0'} Tính năng điều hành cuộc họp</h3>
                    <p>Người chủ trì cuộc họp có quyền thực hiện các thao tác điều
                        hành cuộc họp như thay đổi kiểu hiển thị giao diện, bật/tắt
                        microphone, camera của các thành viên khác trong cuộc họp, điều
                        phối người phát biểu, trình bày.</p>
                </div>
                <br/>
                <div className="Tut Row">
                    <img src={cols12} alt=""/>
                </div>
            
                <br/>
                <div className="Row">
                    <h3>6.{'\u00A0'}{'\u00A0'}{'\u00A0'}Mời thêm thành viên tham gia họp</h3>
                    <p>Để mời thêm thành viên tham gia vào cuộc họp , bạn có thể lựa
                        chọn 1 trong các cách sau:</p>
                    <p>- Sửa thông tin cuộc họp khi cuộc họp đã được tạo thành công</p>
                    <p>- Chọn tính năng "Tạo liên kết". Hệ thống sẽ tự động gửi thư mời tới email của người cần mời họp. Hoặc sao chép link liên kết gửi trực tiếp cho người cần mời họp</p>  
                    <p>
                        <b>Lưu ý: Mỗi liên kết chỉ được sử dụng cho 1 phiên kết nối.</b>
                    </p>
                </div><br/>
                
                <div className="Tut Row">
                    <img src={cols13} alt=""/>
                </div>
                <br/> <br/>

                <div className="Row">
                    <h3>7.{'\u00A0'}{'\u00A0'}{'\u00A0'}Dịch vụ truyền hình trực tuyến</h3>
                    <p>Có thể sử dụng webcam/camera, máy tính bảng điện thoại smartphone quay sự kiện phát qua đường link liên kết trên website.</p>
                    <p>Người dùng chỉ cần truy cập vào link này để để xem video.</p>
                </div>
                

                <div className="Row Permission">
                    
                    <div className="titlePer">
                        <h2>QUYỀN CỦA NGUỜI THAM GIA CUỘC HỌP</h2>
                    </div>
                    
                    <p className="liTut"><a className="perCircle">•</a><b> {'\u00A0'}{'\u00A0'} Quyền của người chủ trì cuộc họp</b></p>
                    <ul className="listPer">        
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Bật/tắt microphone của các thành viên khác</li>    
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Bật/tắt video của các thành viên khác</li> 
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Mời thêm thành viên vào phòng họp</li>
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Cho phép thành viên khác vào phòng họp</li>   
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Tắt tất cả âm thanh của các thành viên trong phòng họp</li>
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Thay đổi thời gian cuộc họp</li>
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Thay đổi kiểu hiển thị phòng họp</li>
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Thực hiện các tính năng chia sẻ: Chia sẻ màn hình, trình chiếu tài liệu, vẽ bảng trắng...</li>
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Thay đổi quyền của các thành viên khác</li>
                    </ul>
                    
                    <p className="liTut"><a className="perCircle">•</a><b>  {'\u00A0'}{'\u00A0'} Quyền của thành viên cuộc họp</b></p>
                    <ul className="listPer">
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Thực hiện các tính năng chia sẻ: Chia sẻ màn hình, trình chiếu tài liệu, vẽ bảng trắng...</li> 
                        <li>- {'\u00A0'}{'\u00A0'}{'\u00A0'} Giơ tay xin được phát biểu</li>
                    </ul> 
                </div>
            </div>
        )
    }

}

export default Tutorial;

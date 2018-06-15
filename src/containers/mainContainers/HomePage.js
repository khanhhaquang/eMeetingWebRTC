import React, { Component } from 'react';
import './homepage.css';

import { Link } from "react-router-dom";

const publicRoom = [
    "Phòng 01",
    "Phòng 02",
    "Phòng 03",
    "Phòng 04"
]

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    renderPublicRooms = () => publicRoom.map((value,index) => {
        return(
            <div className="roomElement roomElementOffline   " key={index}>
                {/*phong hop khong bi khoa */}
                    <Link  to={"/room/"+ (index + 1)} className="tooltopinfo closeSocket">
                        <span className="showroomname">
                                        {value}
                        </span>
                        <span className="showstatusRoom">
                                            Bạn vào đây để tham gia
                        </span>
                    </Link>
                {/* end phong hop khong bi khoa */}
            </div>
        )
    })

    render() {
        return(
            <table className="maincontent">
                <tbody>
                    <tr>
                        <td className="colsleft" style={{paddingTop:"20px"}} valign="top">
                            <div id="privateRoom">
                                <div id="div_meetings" className="meeting">
                                    <div id="privateRoomContent" className="divlistrooms">
                                        {/*<div className="titlemeetingtype">PHÒNG HỌP RIÊNG</div>
                                        <div className="roomElement roomElementOffline ">

                                                <div className="new_room_left">
                                                    <label>mới</label>
                                                </div>

                                                <a >
                                                    <span className="editbutton" title="Sửa cuộc họp"></span>
                                                </a>

                                                <a href="/emeeting/meetingRoomsFrontend/delete/11357" className="closeSocket">
                                                    <span className="deletebutton" title="Xóa cuộc họp"></span>
                                                </a>

                                                <a href="/emeeting/meetingRoomsFrontend/join/11357" className="tooltopinfo1 closeSocket">
                                                    <span className="showroomname">
                                                            1
                                                    </span>

                                                    <span className="showstatusRoom">Bấm vào đây để bắt đầu họp</span>
                                                </a>
                                        </div>*/}
                                    </div>
                                {/* CUOC HOP SAP DIEN RA */}
                                </div>
                                <div id="meeting_details_form" style={{padding:"0px"}} ></div>
                            </div>
                        </td>
                    </tr>
                <tr>
                    <td className="colsleft" style={{paddingTop:"20px"}} valign="top">
                        <div id="fixroom">
                            <div id="publicRoomContent" className="titlemeetingtype">PHÒNG HỌP CÔNG CỘNG - CÓ THỂ SỬ DỤNG NGAY </div>
                            {this.renderPublicRooms()}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default HomePage;

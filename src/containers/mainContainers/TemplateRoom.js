import React, { Component } from 'react';
import './templateroom.css';

import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
    render() {
        return(
            <table className="maincontent" cellpadding="0" cellspacing="0">
                <tbody>
                <tr>
                    <td style={{textAlign: "left"}} className="colsleft" valign="top"> 
                    <div className="cap-top uppercase">
                        <a className="titlemodul arr" href="/emeeting/template/list">Phòng họp mẫu</a>
                        <span className="searchform_">
                    
                            <form method="post" id="search_form" controller="meetingRoomsFrontend" action="search" novalidate="novalidate">
                                <span onclick="submit_search();" className="searchbt">
                                    <div className="bgButton1">
                                        <div className="bgButton2"> 
                                            Tìm kiếm
                                        </div>
                                    </div>
                                 </span>
                                <input className="grayText searchbt" type="text" placeholder="Tìm kiếm..." name="keyword"/> 
                                
                            </form>
                            
                        </span>
                    </div>
                    
                    <form action="/emeeting/meetingRoomsFrontend/index/formact" method="post" name="formact" enctype="multipart/form-data" id="formact">
                        <div className="body">
                            <div className="list">
                                
                                <table cellspacing="0" cellpadding="0" width="100%" className="listElement_">
                                    
                                    <tbody><tr className="tittleListRoom">
                                        <td className="firtele" width="4%">
                                            <input type="hidden" name="_checkall"/>
                                            <input type="checkbox" name="checkall" value="checkall" className="checkAll selectItem" onclick="doCheck_()" id="checkall"/>
                                        </td>
                                        <td width="7%" style={{textAlign: "center"}}>Thứ tự</td>
                                        <td>Tên cuộc họp</td>
                                        <td>Người tham gia</td>
                                        <td></td>
                                    </tr>
                                    
                                    
                                    <tr className="even showelemente">
                                        <td colspan="5">
                                            <div id="template_empty">Bạn chưa có phòng họp mẫu. Để thiết lập phòng họp mẫu, bạn chọn chức năng “Ghi thành phòng mẫu” khi tạo phòng họp riêng”.</div>
                                        </td>
                                    </tr>                                                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default HomePage;

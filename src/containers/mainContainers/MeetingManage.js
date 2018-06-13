import React, { Component } from 'react';
import './meetingmanage.css';

import { Link } from "react-router-dom";

const meetingList = [
    {
        name: "Phòng 01 - My meet",
        startTime: "21:42 29/05/2018",
        durationTime: 0.3,
        note: ""
    },
    {
        name: "Phòng 01 - My meet",
        startTime: "15:01 16/05/2018",
        durationTime: 1.1,
        note: ""
    }
]

class HomePage extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }

    renderMeetingList = () => meetingList.map((value,index)=>{
        return(
            <tr className="showelemente" style={{backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff"}} >
                <td className="firtele">
                    <input type="checkbox" name="item_" value="23913" className="selectItem"/>
                </td>
                <td className="thutu">
                    {index+1}
                </td>
                <td width="22%">
                    {value.name}
                </td>
                <td width="15%">


                </td>

                <td width="13%">
                    {value.startTime}
                </td>

                <td width="10%">
                    {value.durationTime}
                </td>
                <td width="10%">
                    {value.note}
                </td>
            </tr>
        )
    })

    render() {
        return(
            <table className="maincontent" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td style={{textAlign: "left"}} className="colsleft">
                            <div className="cap-top uppercase">
                                <a className="titlemodul arr" href="/emeeting/meetings/list">Quản lý cuộc họp</a>
                                <div className="menuButton searchform">
                                    <form id="search_form" method="post" controller="recordfrontend" action="search" novalidate="novalidate">
                                        <span className="inputandsubmit">
                                        <span onclick="submit_Form();" className="searchbt">
                                            <div className="bgButton1">
                                                <div className="bgButton2"> 
                                                    Tìm kiếm
                                                </div>
                                            </div>
                                        </span>
                                        <input className="searchin searchbt" type="text" placeholder="Tìm kiếm..." name="keyword" value="" onkeypress="keypress(event);"/>

            
                                        <span className="menuButton">
                                        <input style={{float: "left", width: "75px"}} type="text" name="timestart_temp2" id="timestart_temp2" value="2018-05-30" onchange="changeTime();" className="hasDatepicker"/>
                                    </span>
                                        <span className="menuButton textrecord">đến</span>
                                        <span className="menuButton">
                                        <input style={{float: "left", width: "75px"}} type="text" name="timestart_temp1" id="timestart_temp1" value="01/01/2000" onchange="changeTime();" className="hasDatepicker"/>
                                    </span>
                                        <span className="menuButton textrecord">Thống kê cuộc họp từ</span>
                                        <input type="hidden" id="timestartfull" name="timestartfull" value="11:27 30/05/2018"/>
            
                                        </span>
                                    </form>
                                </div>
                            </div>
                            <form action="/emeeting/recordfrontend/index/formact" method="post" name="formact" enctype="multipart/form-data" id="formact">
                                <div id="body" className="body">
                                    <div className="list">
                                        
                                        <table cellspacing="0" cellpadding="0" width="100%" className="listElement_">
                                            <tbody>
                                                <tr className="tittleListRoom">
                                                    <td className="firtele" width="2%">
                                                        <input type="hidden" name="_checkall"/><input type="checkbox" name="checkall" value="checkall" className="checkAll selectItem" id="checkall" onclick="doCheck_()"/>
                                                    </td>
                                                    <td width="5%" className="titleThutu">
                                                        Thứ tự
                                                    </td>
                                                    <td>Tên cuộc họp</td>
                                                    <td></td>
                                                    <td>Thời gian bắt đầu</td>
                                                    <td>Thời gian họp</td>
                                                    <td>Ghi nhớ</td>
                                                </tr>
            
                                                
                                                {this.renderMeetingList()}
            
                                            </tbody>
                                        </table>
            
                                        <div className="actiondivpdde">
                                            <span className="neoButton" style={{display:"none"}} >
                                                <a style={{marginLeft:"15px"}} id="suBmit" onclick="doAction('recordfrontend','delall')">
                                                <div className="bgButton1">
                                                    <div className="bgButton2">
                                                    Xóa
                                                    </div>
                                                </div>
                                                </a>
                                            </span>
            
            
                                            <div align="right" className="paginateButtons" style={{border: "0px"}} >
            
                                            </div>
                                        </div>
            
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

import React, { Component } from 'react';
import './document.css';

import { Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
    render() {
        return(
            <table className="maincontent" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td style={{textAlign: "left"}} className="colsleft" valign="top">
                            <div className="cap-top uppercase">
                                <a className="titlemodul arr" href="/emeeting/documents/list">Quản lý tài liệu</a>
                                <span className="searchform_">
                                
                                    <form id="search_form" method="post" controller="resourcefrontend" action="search" novalidate="novalidate">
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
            
                            <div className="body">
            
                                <div className="list">
                                    <div id="reloadContent">
                                        <form method="post" id="DeleteElement" name="DeleteElement" action="">
            
                                            <table cellspacing="0" cellpadding="0" width="100%" className="listElement_">
            
                                                <tbody>
                                                    <tr className="tittleListRoom">
            
            
                                                        <td width="5%" style={{textAlign: "center"}} >
                                                            <input type="hidden" name="_checkall"/>
                                                            <input type="checkbox" name="checkall" value="" onclick="doCheck_()" className="checkAll selectItem" id="checkall"/>
                                                        </td>
            
            
                                                        <td>Tên </td>
            
                                                        <td>Thời gian tạo </td>
            
                                                        <td>Kích thước </td>
            
            
                                                    </tr>
                                                </tbody>
                                            </table>
            
                                            <div className="paginateButtons" style={{width: "100%!important"}} >
            
                                            </div>
            
            
                                        </form>
            
                                        <table className="actionresource" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td>
            
                                                        <div id="createResource" style={{float: "left"}} >
                                                            <table style={{float: "left", margin: "0px"}} >
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{padding: "0px", width: "110px"}} >
                                                                            <input id="fileUpload" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }} />
                                                                            <a id="upload" onClick={() => this.myInput.click()} >                                                                               
                                                                                <div className="bgButton1">     
                                                                                    <i className="fas fa-plus-circle"></i>                                                                               
                                                                                    <div className="bgButton2" style={{paddingLeft: "22px"}} > Upload File</div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td style={{padding: "0px", width: "110px"}} >
                                                                            <a id="trigger">
                                                                                <div className="bgButton1">
                                                                                    <div className="bgButton2"> Thêm thư mục</div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td style={{padding: "0px", width: "70px"}}>
                                                                            <a id="editItem_">
                                                                                <div className="bgButton1">
                                                                                    <div className="bgButton2"> Sửa tên</div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td style={{padding: "0px", width: "40px"}}>
                                                                            <a id="deleteItems" onclick="submitForm_();">
                                                                                <div className="bgButton1">
                                                                                    <div className="bgButton2">Xóa</div>
                                                                                </div>
                                                                            </a>
                                                                        </td>
                                                                        <td>
                                                                            <div id="sampleformdiv" style={{display: "none"}} title="Thêm thư mục">
                                                                                Tên
                                                                                <form method="post" id="sampleform" name="sampleform" action="javascript:submitForm();" accept-charset="UTF-8" style={{padding: "0px", margin: "0px"}} >
                                                                                    <input type="text" name="foldername" id="foldername"/>
                                                                                    <input type="hidden" id="currentDir" name="currentDir" value="-1"/>
            
                                                                                    <input type="hidden" id="maxSizeFileUpload" name="maxSizeFileUpload" value="100"/>
            
                                                                                    <input type="submit" value="Lưu" id="submitnewfolder"/>
                                                                                    <input type="button" value="Hủy" id="cancel" onclick="ClosePopup('sampleformdiv')"/>
                                                                                </form>
                                                                            </div>
            
                                                                            <div id="sampleformdiv_" style={{display: "none"}} title="Sửa tên">
                                                                                Tên
                                                                                <form method="post" id="sampleform_" name="sampleform_" action="javascript:editResource_();">
                                                                                    <input type="text" name="foldername_" id="foldername_"/>
                                                                                    <input type="hidden" id="currentDir" name="currentDir" value="-1"/>
            
                                                                                    <input type="submit" value="Cập nhật" id="UpdateResource"/>
                                                                                    <input type="button" value="Hủy" onclick="ClosePopup('sampleformdiv_')"/>
                                                                                </form>
                                                                            </div>
            
                                                                            <div id="notify_form_div" style={{display: "none", textAlign: "center"}} title="Upload tài liệu">
                                                                                <div id="notify_msg"></div>
                                                                                <br/>
                                                                                <input type="button" value="Đóng lại" id="close_notify_btn" onclick="ClosePopup('notify_form_div')"/>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
            
            
                                                        <div style={{float:"left", width:"100%", clear:"both", height:"2px", padding:"0px", margin:"0px"}} ></div>
                                                    </td>
                                                    <td>
            
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
            
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

}

export default HomePage;

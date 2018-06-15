import axios from 'axios';

function loginStart(){
    return {type : "LOGIN"}
}
function loginSuccess(data,type){
    return {type : "LOGIN_SUCCESS", data: data, loginType: type }
}
function loginFail(message){
    return {type : "LOGIN_FAIL", message: message}
}

export function login(userData,type){
    return dispatch => {
        // dispatch(loginStart())
        // .then(response => {
            
        // })
        // .catch(error => {
        //     console.log(error);
        //     dispatch(signinFail("Something went wrong"))
        // });
        dispatch(loginSuccess(userData,type))
    }
}
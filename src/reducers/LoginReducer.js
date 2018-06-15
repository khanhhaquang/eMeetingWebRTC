const initState = {
    isLogging : false,
    logged : false,
    loginType: "normal",
    result: {}
}

const signinReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN":
            return{...state, isLogging: true}
        case "LOGIN_SUCCESS":
            return{...state, logged: true, isLogging: false, loginType: action.loginType, result: action.data}
        case "LOGIN_FAIL":
            return{...state, logged: false, isLogging: false};
    
        default:
            return state;
    }
}

export default signinReducer;
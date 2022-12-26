import { clear } from "@testing-library/user-event/dist/clear";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import { LOGOUT_FAIL,LOGOUT_REQUEST,LOGOUT_SUCCESS } from './actionType'
    
const initiailState = {
  loding: false,
  error: "",
  userDetails: [],
   logoutDetails:[clear]
};


const LoginReducer = (status = initiailState, action) => {
switch (action.type) {
case LOGIN_REQUEST:
  return {
    ...status,
    loding: true,
  };

case LOGIN_SUCCESS:
  return {
    ...status,
    loding: false,
    userDetails: action.payload,
    error: "",
  };
case LOGIN_FAIL:
  return {
    ...status,
    loding: false,
    error: action.payload,
  };
default:
  return status;
}
};

export default LoginReducer;


export const  LogoutReducer = (state = initiailState, action) => {
  switch (action.type) {
      case LOGOUT_REQUEST:
          return{
              ...state,
              loding: true,
          }

          case LOGOUT_SUCCESS:
          return{
              ...state,
              loding: false,
              logoutDetails:"",
          }

          case LOGOUT_FAIL:
          return{
              ...state,
              loding: false,
              error:action.payload
          
          }


  default:
      return state;
}

};

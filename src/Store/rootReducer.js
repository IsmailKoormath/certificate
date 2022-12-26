import { combineReducers } from "redux";
import LoginReducer from "../Login/Reducer";
import LogoutReducer from '../Login/Reducer';
import CreateReducer from "../Store/students/reducer"
import CreateCourseReducer from "../Store/course/reducer"
import createCourseCategoryReducer from "./courseCategory/reducer";
const rootReducer = combineReducers({
  LoginReducer,LogoutReducer,CreateReducer,CreateCourseReducer,createCourseCategoryReducer
});

export default rootReducer;

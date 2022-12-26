import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAIL,
  COURSE_REQUEST,
  COURSE_SUCCESS,
  COURSE_FAIL,
  VIEW_COURSE_REQUEST,
  VIEW_COURSE_SUCCESS,
  VIEW_COURSE_FAIL,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAIL,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAIL,
} from "./actionType";

export const createCourseRequest = (input) => ({
  type: CREATE_COURSE_REQUEST,
  payload: input,
});
export const createCourseSuccess = (courseDetails) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: courseDetails,
});
export const createCourceFail = (error) => ({
  type: CREATE_COURSE_FAIL,
  payload: error,
});

//-------------ALL COURSE---------//

export const courseRequest = (input) => ({
  type: COURSE_REQUEST,
  payload: input,
});
export const courseSuccess = (allcourse) => ({
  type: COURSE_SUCCESS,
  payload: allcourse,
});

export const courseFail = (error) => ({
  type: COURSE_FAIL,
  payload: error,
});


//---------------------------view course-------------------//

export const viewCourseRequest = () => ({
  type: VIEW_COURSE_REQUEST
  
  
  ,
  payload: "",
});

export const viewCourseSuccess = (courseSingleView) => ({
  type: VIEW_COURSE_SUCCESS,
  payload: courseSingleView,
});

export const viewCourseFail = (error) => ({
  type: VIEW_COURSE_FAIL,
  payload: error,
});

//---------------course delete------------------------//

export const DeleteCourseRequest = () => ({
  type: DELETE_COURSE_REQUEST,
  payload: "",
});
export const DeleteCourseSuccess = (deleteCourse) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: deleteCourse,
});
export const DeleteCourseFail = (error) => ({
  type: DELETE_COURSE_FAIL,
  payload: error,
});

//---------------course update------------------------//

export const UpdateCourseRequest = () => ({
  type: UPDATE_COURSE_REQUEST,
  payload: "",
});
export const UpdateCourseSuccess = (updateCourse) => ({
  type: UPDATE_COURSE_SUCCESS,
  payload: updateCourse
});
export const UpdateCoursefail = (error) => ({
  type: UPDATE_COURSE_FAIL,
  payload: error,
});
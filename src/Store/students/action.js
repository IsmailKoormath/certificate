import { CREATE_FAIL, CREATE_SUCCESS, CREATE_REQUEST } from "./actionType";
import { STUDENT_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS } from "./actionType";
import {
  SINGLE_VIEW_REQUEST,
  SINGLE_VIEW_SUCCESS,
  SINGLE_VIEW_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_STUDENT_COURSE_FAIL,
  DELETE_STUDENT_COURSE_REQUEST,
  DELETE_STUDENT_COURSE_SUCCESS,
  DELETE_STUDENT_COURSE_FAIL,
  GET_STUDENT_COURSE_REQUEST,
  GET_STUDENT_COURSE_SUCCESS,
  GET_STUDENT_COURSE_FAIL,
  STUDENT_CERTIFICATE_REQUEST,
  STUDENT_CERTIFICATE_SUCCESS,
  STUDENT_CERTIFICATE_FAIL,
} from "./actionType";
export const createRequest = (input) => ({
  type: CREATE_REQUEST,
  payload: input,
});

export const createSuccess = (createDetails) => ({
  type: CREATE_SUCCESS,
  payload: createDetails,
});

export const createFail = (error) => ({
  type: CREATE_FAIL,
  payload: error,
});

//----------get student data---------//

export const studentRequest = (input) => ({
  type: STUDENT_REQUEST,
  payload: input,
});

export const studentSuccess = (allStudent) => ({
  type: STUDENT_SUCCESS,
  payload: allStudent,
});

export const studentFail = (error) => ({
  type: STUDENT_FAIL,
  payload: error,
});

// -------SINGLE VIEW------- //

export const singleViewRequest = () => ({
  type: SINGLE_VIEW_REQUEST,
  payload: "",
});

export const singleViewSuccess = (singleView) => ({
  type: SINGLE_VIEW_SUCCESS,
  payload: singleView,
});

export const singleViewFail = (error) => ({
  type: SINGLE_VIEW_FAIL,
  paylod: error,
});


//----------Update student-------//

export const updateStudentRequest = () => ({
  type: UPDATE_STUDENT_REQUEST,
  payload:""
});

export const updateStudentSuccess = (UpdateStudent,studentId) =>({
type: UPDATE_STUDENT_SUCCESS,
payload:UpdateStudent,
studentId,
});

export const updateStudentFail = (error) => ({
  type: UPDATE_STUDENT_FAIL,
  payload:error,
});

//---------------delete student----------//

export const deleteStudentRequest = () => ({
  type: DELETE_STUDENT_REQUEST,
  payload: "",
});

export const deleteStudentSuccess = (studentId) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: studentId,
});

export const deleteStudentFail = (error) => ({
  type: DELETE_STUDENT_FAIL,
  payload: error,
});


//---------------------create student's course-------------------------------//

export const createStudentCourseRequest = (stdCourse)=>(
  console.log(stdCourse),{
  type:CREATE_STUDENT_COURSE_REQUEST,
  payload:stdCourse
})

export const createStudentCourseSuccess =(studentCourse)=>(
 {
type:CREATE_STUDENT_COURSE_SUCCESS,
payload:studentCourse
})

export const createStudentCourseFail =(error) =>({
type:CREATE_STUDENT_COURSE_FAIL,
payload:error
})

//----------------get student's course--------------------------------//




export const getStudentCourseRequest = () => ({
  type: GET_STUDENT_COURSE_REQUEST,
  payload:"",
});
export const getStudentCourseSuccess = (studentCourseData) => ({
  type: GET_STUDENT_COURSE_SUCCESS,
  payload: studentCourseData,
});
export const getStudentCourseFail = (error) => ({
  type: GET_STUDENT_COURSE_FAIL,
  payload: error,
});




//-----------------delete student's course----------------------//

export const deleteStudentCourseRequest = () => ({
  type: DELETE_STUDENT_COURSE_REQUEST,
  payload:'',
});

export const deleteStudentCourseSuccess = (id) => ({
  type: DELETE_STUDENT_COURSE_SUCCESS,
  payload:id,
});

export const deleteStudentCourseFail = (error) => ({
  type: DELETE_STUDENT_COURSE_FAIL,
  payload: error,
});


//-----------------show student details in certificate----------------------//

export const studentCertificateRequest = () => ({
  type: STUDENT_CERTIFICATE_REQUEST,
  payload: "",
});
export const studentCertificateSuccess = (studentCertificate) => ({
  type: STUDENT_CERTIFICATE_SUCCESS,
  payload: studentCertificate,
});
export const studentCertificateFail = (error) => ({
  type: STUDENT_CERTIFICATE_FAIL,
  payload: error,
});
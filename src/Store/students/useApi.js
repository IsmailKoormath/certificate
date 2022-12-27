import {
  createRequest,
  createSuccess,
  createFail,
  studentRequest,
  studentFail,
  studentSuccess,
  singleViewFail,
  singleViewRequest,
  singleViewSuccess,
  updateStudentRequest,
  updateStudentSuccess,
  updateStudentFail,
  deleteStudentRequest,
  deleteStudentFail,
  deleteStudentSuccess,
  createStudentCourseRequest,
  createStudentCourseSuccess,
  createStudentCourseFail,
  deleteStudentCourseFail,
  deleteStudentCourseSuccess,
  deleteStudentCourseRequest,
  getStudentCourseRequest,
  getStudentCourseSuccess,
  getStudentCourseFail,
  studentCertificateRequest,
  studentCertificateSuccess,
  studentCertificateFail,
} from "./action";
import { axiosApi } from "../AxiosMethod";
import { create } from "lodash";
// import { mishabaxios } from "../AxiosMethod";

//-----------------------create student------------------------------//

export const createApi = (input, navigate) => {
  console.log(input);

  return async (dispatch) => {
    dispatch(createRequest(input));

    try {
      const user = await axiosApi.post(`/student/student/`, input);
      console.log(user);
      dispatch(createSuccess(user));
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(createFail(error?.response?.data));
    }
  };
};

//-----------------get student data-------------//

export const studentApi = () => {
  return async (dispatch) => {
    dispatch(studentRequest());

    try {
      const user = await axiosApi.get(`/student/student/`);
      // console.log(user);
      dispatch(studentSuccess(user.data));
    } catch (error) {
      console.log(error);
      dispatch(studentFail(error.response?.data));
    }
  };
};

//-----------------single view--------//

export const singleViewApi = (studentId) => {
  return async (dispatch) => {
    dispatch(singleViewRequest(studentId));

    try {
      const user = await axiosApi.get(`/student/student/${studentId}`);
      console.log(user);
      dispatch(singleViewSuccess(user.data));
    } catch (error) {
      console.log(error);
      dispatch(singleViewFail(error.response?.data));
    }
  };
};

//--------------------update student--------//

export const UpdateStudentApi = (studentId, navigate, input) => {
  return async (dispatch) => {
    dispatch(updateStudentRequest(studentId));

    try {
      const user = await axiosApi.put(`/student/student/${studentId}/`, input);
      console.log(user);

      dispatch(updateStudentSuccess(user.data));
      navigate(`/students`);
    } catch (error) {
      console.log(error);
      dispatch(updateStudentFail(error.response?.data));
    }
  };
};

//--------------------DELETE STUDENT--------------------------//

export const deleteStudentApi = (studentId, navigate) => {
  return async (dispatch) => {
    dispatch(deleteStudentRequest(studentId));

    try {
      const user = await axiosApi.delete(`/student/student/${studentId}`);
      console.log(user);
      dispatch(deleteStudentSuccess(user.data));
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(deleteStudentFail(error.response?.data));
    }
  };
};

//---------------------create student's course-------------------------------//

export const createStudentCourseApi = (navigate, stdCourse ) =>  {
  console.log(stdCourse);
  return async (dispatch) => {
    dispatch(createStudentCourseRequest(stdCourse));
    console.log(stdCourse);

    // console.log(stdCourse);


    try {
      const user = await axiosApi.post(`/student/student_course/`, stdCourse);
      dispatch(createStudentCourseSuccess(user.data));
      console.log(user.data);
      navigate("/studentscourse");
    } catch (error) {
      console.log(error);
      dispatch(createStudentCourseFail(error?.response?.data));
    }
  };
};

//----------------get student's course--------------------------------//

export const getStudentCourseApi = () => {
  // console.log();
  return async (dispatch) => {
    dispatch(getStudentCourseRequest());

    try {
      const user = await axiosApi.get(`/student/student_course/`);

      console.log(user);

      dispatch(getStudentCourseSuccess(user.data));
    } catch (error) {
      console.log(error);
      dispatch(getStudentCourseFail(error?.response?.data));
    }
  };
};

//-----------------delete student's course----------------------//

export const deleteStudentCourseApi = (id, navigate) => {
  return async (dispatch) => {
    dispatch(deleteStudentCourseRequest());

    try {
      const user = await axiosApi.delete(`/student/student_course/${id}`);
      dispatch(deleteStudentCourseSuccess(id));
      navigate("/studentscourse");
    } catch (error) {
      console.log(error);
      dispatch(deleteStudentCourseFail(error.response?.data));
    }
  };
};

// show student details in certificate //

export const mainCertificate = (id)=>{
  return async (dispatch)=>{
    dispatch(studentCertificateRequest())

    try{
      const res = await axiosApi.get(`/student/student/${id}`)
      dispatch(studentCertificateSuccess(res.data))
    }
    catch(error){
      dispatch(studentCertificateFail(error?.response?.data))
    }
  }
}
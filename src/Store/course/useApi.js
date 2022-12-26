import {
  createCourseRequest,
  createCourseSuccess,
  createCourceFail,
  courseRequest,
  courseSuccess,
  courseFail,
  UpdateCourseRequest,
  UpdateCourseSuccess,
  UpdateCoursefail,
  viewCourseRequest,
  viewCourseSuccess,
  viewCourseFail,
  DeleteCourseSuccess,
  DeleteCourseRequest,
  DeleteCourseFail,
} from "./action";

import { axiosApi } from "../AxiosMethod";
// import { mishabaxios } from "../AxiosMethod";

export const createCourseApi = (input, navigate) => {
  console.log(input);

  return async (dispatch) => {
    dispatch(createCourseRequest(input));

    try {
      const user = await axiosApi.post(`/course/course/`, input);
      console.log(user);
      dispatch(createCourseSuccess(user));
      navigate("/allcourse");
    } catch (error) {
      console.log(error);
      dispatch(createCourceFail(error?.response?.data));
    }
  };
};
//----------------all course---------//

export const courseApi = () => {
  return async (dispatch) => {
    dispatch(courseRequest());

    try {
      const user = await axiosApi.get(`/course/course/`);
      console.log(user);
      dispatch(courseSuccess(user.data));
    } catch (error) {
      console.log(error);
      dispatch(courseFail(error?.response?.data));
    }
  };
};

//--------------------VIEW COURSE---------------------//

export const viewCourseApi = (id) => {
  return async (dispatch) => {
    dispatch(viewCourseRequest());

    try {
      const user = await axiosApi.get(`/course/course/${id}`);
      console.log(user);
      dispatch(viewCourseSuccess(user.data));
    } catch (error) {
      console.log(error);
      dispatch(viewCourseFail(error?.response?.data));
    }
  };
};

//---------------course delete-------------------------//

export const DeleteCourseApi = (id, navigate) => {
  return async (dispatch) => {
    dispatch(DeleteCourseRequest(id));

    try {
      const res = await axiosApi.delete(`/course/course/${id}`);
      dispatch(DeleteCourseSuccess(res.data));
      navigate("/allcourse");
    } catch (error) {
      dispatch(DeleteCourseFail(error?.response?.data));
    }
  };
};
//----------------course update----------------//

export const UpdateCourseApi = (catId, navigate, values) => {
  return async (dispatch) => {
    dispatch(UpdateCourseRequest(catId));
    try {
      const user = await axiosApi.put(`/course/course/${catId}/`,values);
      console.log(user);
      dispatch(UpdateCourseSuccess(user.data));
      navigate(`/coursesingleview/${catId}`);
    } catch (error) {
      dispatch(UpdateCoursefail(error?.response?.data));
    }
  };
};

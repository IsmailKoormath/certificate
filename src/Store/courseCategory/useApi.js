import {
  CourseCategoryRequest,
  CourseCategorySuccess,
  CourseCategoryFail,
  getCatagoryFail,
  getCategoryRequest,
  getCatagorySuccess,
  viewCatagoryRequest,
  viewCatagorySuccess,
  viewCatagoryFail,
  updateCatagoryRequest,
  updateCategoryFail,
  updateCatagorySuccess,
  deleteCategoryRequest,
  deleteCategorySuccess,

} from "./action";

import { axiosApi } from "../AxiosMethod";
import { mishabaxios } from "../AxiosMethod";
// import { iyadaxios } from "../AxiosMethod";


export const CourseCategoryApi = (input, navigate) => {
  console.log(input);
  return async (dispatch) => {
    dispatch(CourseCategoryRequest(input));

    try {
      const user = await axiosApi.post(`/course/course_category/`, input);
      console.log(user);
      dispatch(CourseCategorySuccess(user));
      navigate("/courcecategorylist");
    } catch (error) {
      dispatch(CourseCategoryFail(error?.response?.data));
      console.log(error);
    }
  };
};

//--------------get course catagory----------------//

export const getCategoryApi = () => {
  return async (dispatch) => {
    dispatch(getCategoryRequest());

    try {
      const user = await axiosApi.get(`/course/course_category/`);
      console.log(user);
      dispatch(getCatagorySuccess(user.data));
    } catch (error) {
      dispatch(getCatagoryFail(error?.response?.data));
    }
  };
};

//-------------------------------VIEW COURSE CATAGORY------------------//

export const viewCategoryApi = (id) => {
  return async (dispatch) => {
    dispatch(viewCatagoryRequest());
    try {
      const user = await axiosApi.get(`/course/course_category/${id}`);
      console.log(user);
      dispatch(viewCatagorySuccess(user.data));
    } catch (error) {
      dispatch(viewCatagoryFail(error?.response?.data));
    }
  };
};

//-----------------update catagory--------------//

export const updateCatagoryApi = (catId,navigate,data)=>{
  return async (dispatch)=>{
    dispatch(updateCatagoryRequest(catId))

    try{
      const user = await axiosApi.put(`/course/course_category/${catId}/`,data)
      console.log(user)
      dispatch(updateCatagorySuccess(user.data))
      navigate('/courcecategorylist')
    }
    catch(error){
      dispatch(updateCategoryFail(error?.response?.data))
      console.log(error);
    }
  }

}

//-----------------delete catagory---------------------//

export const deleteCategoryApi = (id,navigate)=>{
  return async (dispatch)=>{
    dispatch(deleteCategoryRequest(id))

    try{
      const user = await axiosApi.delete(`/course/course_category/${id}`)
      dispatch(deleteCategorySuccess(user.data))
      navigate("/courcecategorylist")
    }
    catch(error){
      dispatch(CourseCategoryFail(error?.response?.data))
      console.log(error);
    }
  }
}
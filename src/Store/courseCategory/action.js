import {
  COURSE_CATEGORY_REQUEST,
  COURSE_CATEGORY_SUCCESS,
  COURSE_CATEGORY_FAIL,
  GET_CATAGORY_FAIL,
  GET_CATAGORY_SUCCESS,
  GET_CATAGORY_REQUEST,
  VIEW_CATAGORY_REQUEST,
  VIEW_CATAGORY_SUCCESS,
  VIEW_CATAGORY_FAIL,
  UPDATE_CATAGORY_REQUEST,
  UPDATE_CATAGORY_SUCCESS,
  UPDATE_CATAGORY_FAIL,
  DELETE_CATAGORY_REQUEST,
  DELETE_CATAGORY_SUCCESSS,
  DELETE_CATAGORY_FAIL,
} from "./actionType";

export const CourseCategoryRequest =(input) =>({
    type:COURSE_CATEGORY_REQUEST,
    payload:input
});
export const CourseCategorySuccess =(userDetails) =>({
    type:COURSE_CATEGORY_SUCCESS,
    payload:userDetails,
    
});

export const CourseCategoryFail =(error) =>({
    type:COURSE_CATEGORY_FAIL,
    payload:error
})

//----------------GET COURSE CATAGORY--------------//

export const getCategoryRequest = () =>({
    type:GET_CATAGORY_REQUEST,
    payload:"",
})

export const getCatagorySuccess = (courseCatagory) => ({
    type: GET_CATAGORY_SUCCESS,
    payload: courseCatagory,
  });
  
  export const getCatagoryFail = (error) => ({
    type: GET_CATAGORY_FAIL,
    payload: error,
  });
  
//--------------------view course catagory------------//

export const viewCatagoryRequest = () => ({
  type:VIEW_CATAGORY_REQUEST,
  payload:""
})
export const viewCatagorySuccess = (singleView) =>({
  type:VIEW_CATAGORY_SUCCESS,
  payload:singleView
})
export const viewCatagoryFail = ()=>({
  type:VIEW_CATAGORY_FAIL,
  payload:""
})

 
//---------------------UPDATE COURSE CATAGORY----------------//

export const updateCatagoryRequest =()=>({
  type:UPDATE_CATAGORY_REQUEST,
  payload:""
})

export const updateCatagorySuccess = ( courseCatagoryUpdate,catId) =>({
  type:UPDATE_CATAGORY_SUCCESS,
  payload: courseCatagoryUpdate,catId
})
export const updateCategoryFail = () =>({
  type  :UPDATE_CATAGORY_FAIL,
  payload:""
})


//-------------delete CATAGORY----------//

export const deleteCategoryRequest =()=>({
type:DELETE_CATAGORY_REQUEST,
payload:""
})
export const deleteCategorySuccess = (deleteCategory)=>({
  type:DELETE_CATAGORY_SUCCESSS,
  payload:deleteCategory
})

export const deleteCategoryFail = ()=>({
  type:DELETE_CATAGORY_FAIL,
  payload:""
})
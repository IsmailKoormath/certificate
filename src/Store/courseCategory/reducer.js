import {
  COURSE_CATEGORY_REQUEST,
  COURSE_CATEGORY_SUCCESS,
  COURSE_CATEGORY_FAIL,
  GET_CATAGORY_REQUEST,
  GET_CATAGORY_SUCCESS,
  GET_CATAGORY_FAIL,
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
const initialstate = {
  loading: false,
  error: "",
  userDetails: [],
  courseCatagory: [],
  singleView: {},
};
const createCourseCategoryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case COURSE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COURSE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        courseCatagory: action.payload,
        error: "",
      };

    case COURSE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //-----------------------get catagory----------------------//

    case GET_CATAGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CATAGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        courseCatagory: action.payload,
        error: "",
      };

    case GET_CATAGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //----------------VIEW CATAGORY-----------------//

    case VIEW_CATAGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case VIEW_CATAGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        singleView: action.payload,
        error: "",
      };

    case VIEW_CATAGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //--------------update catagory---------------//

    case UPDATE_CATAGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CATAGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        courseCatagoryUpdate: action.payload,
        error: "",
      };
    case UPDATE_CATAGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_CATAGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_CATAGORY_SUCCESSS:
      return {
        ...state,
        loading: false,
        deleteCategory: action.payload,
        error: "",
      };
    case DELETE_CATAGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createCourseCategoryReducer;

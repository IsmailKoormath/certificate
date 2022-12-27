// import { Action } from "history";
import {
  CREATE_FAIL,
  CREATE_SUCCESS,
  CREATE_REQUEST,
  STUDENT_FAIL,
  STUDENT_REQUEST,
  STUDENT_SUCCESS,
  SINGLE_VIEW_FAIL,
  SINGLE_VIEW_SUCCESS,
  SINGLE_VIEW_REQUEST,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_REQUEST,
  CREATE_STUDENT_COURSE_REQUEST,
  CREATE_STUDENT_COURSE_SUCCESS,
  CREATE_STUDENT_COURSE_FAIL,
  GET_STUDENT_COURSE_REQUEST,
  GET_STUDENT_COURSE_SUCCESS,
  GET_STUDENT_COURSE_FAIL,
  DELETE_STUDENT_COURSE_REQUEST,
  DELETE_STUDENT_COURSE_SUCCESS,
  DELETE_STUDENT_COURSE_FAIL,
  STUDENT_CERTIFICATE_REQUEST,
  STUDENT_CERTIFICATE_SUCCESS,
  STUDENT_CERTIFICATE_FAIL,
} from "./actionType";

const initialState = {
  loading: false,
  error: "",
  userDetails: [],
  allStudent: [],
  singleView: {},
  UpdateStudent: {},
  deleteStudent: {},
  studentCourse: {},
  studentCourseData: {},
  studentCourseDelete: {},
  studentCertificate: {},
  
 
};

const CreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        createDetails: action.payload,
        error: "",
      };

    case CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //------------student data-----------//

    case STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        allStudent: action.payload,
        error: "",
      };

    case STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //--------------Single View---------------//

    case SINGLE_VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SINGLE_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        singleView: action.payload,
        error: "",
      };

    case SINGLE_VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //------------update student------------//

    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        UpdateStudent: action.payload,
        error: "",
      };

    case UPDATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //-----------delete student--------//

    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteStudent: action.payload,
        error: "",
      };

    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //-----------------------------create student's course-------------------------------//

    case CREATE_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourse: action.payload,
        error: "",
      };

    case CREATE_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //----------------get student's course--------------------------------//

    case GET_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourseData: action.payload,
        error: "",
      };

    case GET_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //-----------------delete student's course----------------------//

    case DELETE_STUDENT_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STUDENT_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourseData: state.studentCourseData?.filter(
          (i) => i.id !== action.payload
        ),
      };

    case DELETE_STUDENT_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

         // show student details in certificate //

    case STUDENT_CERTIFICATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case STUDENT_CERTIFICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCertificate: action.payload,
        error: "",
      };

    case STUDENT_CERTIFICATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CreateReducer;

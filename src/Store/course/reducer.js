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

const initiailstate = {
  loading: false,
  error: "",
  courseDetails: [],
  allcourse: {},
  courseSingleView:{},
  deleteCourse:{},
  updateCourse:{},
};

const CreateCourseReducer = (state = initiailstate, action) => {
  switch (action.type) {
    case CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetails: action.payload,
        error: "",
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //---------------all course----------------------//

    case COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        allcourse: action.payload,
        errot: "",
      };

    case COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      
      //--------------------------VIEW COURSE-----------------//

      case VIEW_COURSE_REQUEST:
        return {
          ...state,
          loding: true,
        };

        case VIEW_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseSingleView: action.payload,
        error:""
      };

      case VIEW_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        
      };

    

//---------------course delete-------------------------//


case DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteCourse: action.payload,
        error: "",
      };

    case DELETE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      //-----------------course update---------------//

    case UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCourse: action.payload,
        error: "",
      };
    case UPDATE_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default CreateCourseReducer;

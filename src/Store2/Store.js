import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Login2/LoginSlice'
import studentReducer from './Students2/studentSlice'
import courseReducer from './course2/courseSlice'
import courseCategoryReducer from './courseCategory2/courseCategorySlice'
import studentCourseReducer from './studentCourse/studentCourseSlice'
export const store2 = configureStore({
  reducer: {
    Auth:AuthReducer,
    students:studentReducer,
    course:courseReducer,
    category:courseCategoryReducer,
    studentCourse:studentCourseReducer
  },
})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "../AxiosMethod";

const initialState = {
  loading: false,
  error: null,
  studentCourse: {},
};

// student course

export const studentCourseApi = createAsyncThunk(
  "studentCourse/studentCourseApi",
  async () => {
    const res = await axiosApi.get("/student/student_course/");
    return res.data;
  }
);

// create Student course

export const createStudentCourseApi = createAsyncThunk(
  "studentCourse/createStudentCour",
  async (input) => {
    await axiosApi.post(`/student/student_course/`, input.stdCourse);
    input.navigate(`/studentview/${input.catId}`);
  }
);

const studentCourseSlice = createSlice({
  name: "studentCourse",
  initialState,
  reducers: {},
  extraReducers: {

    // student course

    [studentCourseApi.pending]: (state, action) => {
      state.loading = true;
      console.log("student Course pending");
    },
    [studentCourseApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.studentCourse = action.payload;
      console.log("student course fulfilled");
    },
    [studentCourseApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("student course fail");
    },

    // create student course

    [createStudentCourseApi.pending]: (state) => {
      state.loading = true;
      console.log("create student course pending");
    },
    [createStudentCourseApi.fulfilled]: (state) => {
      state.loading = false;
      console.log("create student course success");
    },
    [createStudentCourseApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("create student course fail");
    },
  },
});

export default studentCourseSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "../AxiosMethod";

const initialState = {
  loading: false,
  error: null,
  allCourse: [],
  singleCourse:{},
};

//all courses

export const coursesApi = createAsyncThunk("course/courseApi", async (pages) => {
  const res = await axiosApi.get(`/course/course/?page=${pages ? pages :1}`);
  return res.data;
});

//create course

export const createCourseApi = createAsyncThunk("course/createCourseApi", async (input) => {
    const res = await axiosApi.post("/course/course/",input.input);
    input.navigate('/allcourse')
    return res.data;
  });

  //single course

export const singleCourseApi = createAsyncThunk('course/singleCourseApi',async (input)=>{
  const res = await axiosApi.get(`/course/course/${input.courseId}`)
  return res.data

})

// delete course

export const deleteCourseApi = createAsyncThunk('course/deleteCourseApi', async ({courseId,navigate})=>{
  const res= await axiosApi.delete(`/course/course/${courseId}`)
  navigate('/allcourse')
  return res.data
})

//update Course

export const updateCourseApi = createAsyncThunk('course/updateCourseApi',async (input)=>{
  await axiosApi.put(`/course/course/${input.courseId}`,input.Stoke)
  input.navigate('/allcourse')
})

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {

    //all course

    [coursesApi.pending]: (state, action) => {
      state.loading = true;
    },
    [coursesApi.fulfilled]: (state, action) => {
      state.allCourse = action.payload;
      state.loading = false;
      console.log("coursesApi fulfilled");
    },
    [coursesApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

//create course

    [createCourseApi.pending]: (state, action) => {
      state.loading = true;
      console.log("course create pending");
    },
    [createCourseApi.fulfilled]: (state, action) => {
      console.log("course created successfully");
      state.loading = false;
    },
    [createCourseApi.rejected]: (state, action) => {
      state.loading = false;
      console.log("course creation regected");
    },

    //single course

    [singleCourseApi.pending]:(state,action)=>{
      state.loading=true
      console.log('single course fail');
    },
    [singleCourseApi.fulfilled]:(state,action)=>{
      state.loading=false
      state.singleCourse=action.payload
      console.log("single course success");
    },
    [singleCourseApi.rejected]:(state,action)=>{
      state.loading=false
      state.error=action.error
      console.log('single course failed');
    },

// delete course

[deleteCourseApi.pending]:(state,action)=>{
  state.loading=true
  console.log('delete course pending');
},
[deleteCourseApi.fulfilled]:(state,action)=>{
  state.loading=false
  console.log('delete course success');
},
[deleteCourseApi.rejected]:(state,action)=>{
  state.loading = false
  state.error= action.error
  console.log('delete course fail');
},

// update course

[updateCourseApi.pending]:(state)=>{
  state.loading = true 
  console.log("update pending");
},
[updateCourseApi.fulfilled]:(state)=>{
  state.loading=false
  console.log('update course success');
},
[updateCourseApi.rejected]:(state,action)=>{
  state.loading = false
  state.error= action.error
  console.log('update course fail');
}

  },
});

export default courseSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosApi } from "../AxiosMethod";

const initialState = {
  loading: false,
  error: null,
  allStudents: [],
  singleStudent: {},
};

//all students

export const studentsApi = createAsyncThunk(
  "students/studentsApi",
  async (pages) => {
    const res = await axiosApi.get(`/student/student/?page=${pages ? pages : 1}`);
    return res.data;
  }
);

//create students

export const createStudentApi = createAsyncThunk(
  "students/createStudentApi",
  async (input) => {
    await axiosApi.post("/student/student/", input.input);
    input.navigate("/students");
  }
);

// single student

export const singleStudentApi = createAsyncThunk(
  "student/singleStudentApi",
  async (input) => {
    const res = await axiosApi.get(`/student/student/${input.studentId}`);
    return res.data;
  }
);

// delete student

export const deleteStudentApi = createAsyncThunk(
  "students/deleteStudentApi",
  async ({ studentId, navigate }) => {
    const res = await axiosApi.delete(`/student/student/${studentId}`);
    navigate("/students");
    return res.data;
  }
);

// update students

export const updateStudentApi = createAsyncThunk(
  "students/updateStudentApi",
  async (input) => {
    const res = await axiosApi.put(
      `/student/student/${input.studentId}`,
      input.store
    );
    input.navigate("/students");
    return res.data;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {

    //all students

    [studentsApi.pending]: (state, action) => {
      state.loading = true;
    },
    [studentsApi.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("studentsApi fulfilled");
      state.allStudents = action.payload;
      toast.success("studets")
   
    },
    [studentsApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    // create student

    [createStudentApi.pending]: (state, action) => {
      state.loading = true;
      console.log("studentcreate pending");
    },
    [createStudentApi.fulfilled]: (state, action) => {
      console.log("student create success"); 
    },
    [createStudentApi.rejected]: (state, action) => {
      state.loading = false;
      console.log("student creation failed");
    },

    //single student

    [singleStudentApi.pending]: (state, action) => {
      state.loading = true;
      console.log("single student pending");
    },
    [singleStudentApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleStudent = action.payload;
      console.log("single studenet success");
      toast.success("studet")
    },
    [singleStudentApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("single student fail");
    },

    // delete student

    [deleteStudentApi.pending]: (state, action) => {
      state.loading = true;
      console.log("delete student pending");
    },
    [deleteStudentApi.fulfilled]: (state) => {
      state.loading = false;
      console.log('student deleted');
      toast.error("student deleted")
    },
    [deleteStudentApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("delete student fail");
    },

    //update student

    [updateStudentApi.pending]: (state) => {
      state.loading = true;
      console.log("update student pending");
    },
    [updateStudentApi.fulfilled]: (state) => {
      state.loading = false;
      console.log("update student success");
    },
    [updateStudentApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("update student fail");
    },
  },
});

export default studentSlice.reducer;

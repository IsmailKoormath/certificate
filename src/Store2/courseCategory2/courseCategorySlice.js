import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "../AxiosMethod";

const initialState = {
  loading: false,
  error: null,
  allCategoty: [],
  singleCategory: {},
};

// all course category

export const categoryApi = createAsyncThunk(
  "category/categoryApi",
  async (pages) => {
    const res = await axiosApi.get(
      `/course/course_category/?page=${pages ? pages : 1}`
    );
    return res.data;
  }
);

//create course category

export const createCategoryApi = createAsyncThunk(
  "category/createCategory",
  async (input) => {
    await axiosApi.post("/course/course_category/", input.input);
    input.navigate("/courcecategorylist");
  }
);

//single course category

export const singleCategryapi = createAsyncThunk(
  "category/singleCategory",
  async ({ courseCategoryId }) => {
    const res = await axiosApi.post(
      `/course/course_category/${courseCategoryId}`
    );
    return res.data;
  }
);

// delete course category

export const deleteCategoryApi = createAsyncThunk(
  "category/deleteCategoryApi",
  async ({ courseCategoryId, navigate }) => {
    const res = await axiosApi.delete(
      `/course/course_category/${courseCategoryId}`
    );
    navigate("/courcecategorylist");
    return res.data;
  }
);

// update course category

export const updateCategoryApi = createAsyncThunk(
  "category/updateCategory",
  async ({ courseCategoryId, navigate, data }) => {
    await axiosApi.put(`/course/course_category/${courseCategoryId}`, data);
    navigate("/courcecategorylist");
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    // all course category

    [categoryApi.pending]: (state, action) => {
      state.loading = true;
    },
    [categoryApi.fulfilled]: (state, action) => {
      state.allCategoty = action.payload;
      state.loading = false;
      console.log("categoryApi fulfilled");
    },
    [categoryApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },

    // create course category

    [createCategoryApi.pending]: (state) => {
      state.loading = true;
    },
    [createCategoryApi.fulfilled]: (state) => {
      state.loading = false;
      console.log("category created successfully");
    },
    [createCategoryApi.rejected]: (state, action) => {
      state.loading = false;
      console.log("create category failed");
    },

    // single course category

    [singleCategryapi.pending]: (state, action) => {
      state.loading = true;
      console.log("single category pending");
    },
    [singleCategryapi.fulfilled]: (state, action) => {
      state.singleCategory = action.payload;
      state.loading = false;
      console.log("single category successfully");
    },
    [singleCategryapi.rejected]: (state, action) => {
      state.loading = false;
      console.log("single category failed");
    },

    // delete course category

    [deleteCategoryApi.pending]: (state) => {
      state.loading = true;
      console.log("delete category pending");
    },
    [deleteCategoryApi.fulfilled]: (state) => {
      state.loading = false;
      console.log("delete category success");
    },
    [deleteCategoryApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("delete category fail");
    },

    // update course category

    [updateCategoryApi.pending]: (state) => {
      state.loading = true;
      console.log("update course category pending");
    },
    [updateCategoryApi.fulfilled]: (state) => {
      state.loading = false;
      console.log("update course category successfully");
    },
    [updateCategoryApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      console.log("update course category failed");
    },
  },
});

export default categorySlice.reducer;

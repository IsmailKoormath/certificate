import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosApi } from "../AxiosMethod";

export const loginApi = createAsyncThunk("Auth/loginApi", async (input) => {
  const res = await axiosApi.post( `/account/login/`, input.status);

  if (res?.data?.token) {
    localStorage.setItem("token", res?.data?.token);
    input.navigate("/dashboard");
  }
  return res.data;
});

export const logoutApi = createAsyncThunk("Auth/logoutApi", async (navigate) => {
  const token = localStorage.getItem("token");
  await axiosApi.post( "/account/logout/",token);
  localStorage.removeItem("token");
  navigate.navigate("/");
 
});

const initialState = {
  token: "",
};

const loginSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.pending]: (state) => {
      console.log("login pending");
    },
    [loginApi.fulfilled]: (state, action) => {
      console.log("login fulfilled");
      state.token = action.payload;
      toast.success('Login success!', {
        position: "top-right",
        autoClose: 1500,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
        // theme: "light",
        })
    },
    [loginApi.rejected]: (state) => {
      console.log("login rejected");
    },
    [logoutApi.pending]: (state, action) => {
      console.log("logout pending");
    },
    [logoutApi.fulfilled]: (state, action) => {
      console.log("logout fulfilled");
    },
    [logoutApi.rejected]: (state, action) => {
      console.log("logout rejected");
    },
  },
});


export default loginSlice.reducer;

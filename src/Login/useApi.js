import {
  loginFail,
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  logoutFail,
} from "./action";
import { axiosApi } from "../Store/AxiosMethod";

export const loginApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest(input));

    try {
      const res = await axiosApi.post(`/api/auth`, input);

      console.log(res);

      if (res?.data?.token) {
        localStorage.setItem("token", res?.data?.token);
        dispatch(loginSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};

export const logoutApi = (navigate) => {
  return async (dispatch) => {
    dispatch(logoutRequest());

    try {
      const token = localStorage.getItem("token");

      // console.log(token);
      const user = await axiosApi.post(`/api/auth/logout`, token);

      console.log(user);

      // if (user) {
      dispatch(logoutSuccess(user));
      localStorage.removeItem("token");
      navigate("/");
      // }
    } catch (error) {
      dispatch(logoutFail(error?.response?.data));
    }
  };
};

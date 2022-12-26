import axios from "axios";

const BASICURL = "http://api.certificates.edisonvalley.com/api/v1";
// const MISHAB ="http://192.168.29.226:3000"
// const IYAD ="http://192.168.29.42:8000"

export const axiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});
// export const mishabaxios = axios.create({
//   baseURL: MISHAB,
//   withCredentials: true,
// });
// export const iyadaxios = axios.create({
//   baseURL: IYAD,
//   withCredentials: true,
// });

axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] =
      "Token " + token;

  }
  else {
    console.log("error");
  }

  return config;
});
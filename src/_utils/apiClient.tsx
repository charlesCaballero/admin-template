import axios from "axios";
import Cookies from "js-cookie";

const url = "http://localhost:8000/api"; //change this url into the url where your laravel is being serve

const apiClient = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    common: {
      Accept: "application/json",
      Authorization: "Bearer " + Cookies.get("token"),
    },
  },
});

export default apiClient;

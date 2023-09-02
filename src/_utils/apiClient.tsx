import axios from "axios";

const url = "http://localhost:8000/api"; //change this url into the url where your laravel is being serve

const apiClient = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    common: {
      Accept: "application/json",
    },
  },
});

export default apiClient;

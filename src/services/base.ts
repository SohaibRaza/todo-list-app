import axios from "axios";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/api",
});

const API_URL = process.env.REACT_APP_API_URL;
export { baseApi, API_URL };

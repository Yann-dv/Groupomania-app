import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-groupo.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

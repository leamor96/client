import axios from "axios";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "https://server-deploy-ibm1.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});
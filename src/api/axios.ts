import axios from "axios";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "https://lens-ease-server-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030" || "https://todoserver0.herokuapp.com",
});

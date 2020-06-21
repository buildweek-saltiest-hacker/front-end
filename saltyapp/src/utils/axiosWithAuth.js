import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://salty-hackers-ls.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
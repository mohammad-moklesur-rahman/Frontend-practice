import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-practice-tau.vercel.app/api",
});

const useAxios = () => {
  return instance;
};

export default useAxios;

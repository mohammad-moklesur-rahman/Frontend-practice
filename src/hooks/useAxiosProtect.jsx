import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const protectInstance = axios.create({
  baseURL: "https://backend-practice-tau.vercel.app/api",
});

const useAxiosProtect = () => {
  const { user, singOUt } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // * Request Interceptors
    const requestInterceptors = protectInstance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      }
    );

    // * Response Interceptors
    const responseInterceptors = protectInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
          singOUt().then(() => {
            navigate("/singup");
          });
        }
      }
    );

    return () => {
      protectInstance.interceptors.request.eject(requestInterceptors);
      protectInstance.interceptors.response.eject(responseInterceptors);
    };
  }, [user, singOUt, navigate]);

  return protectInstance;
};

export default useAxiosProtect;

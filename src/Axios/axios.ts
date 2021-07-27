import axios from "axios";
import { LS_AUTH_TOKEN } from "../Constants/constants";

export const axiosRequest = () => {
    axios.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem(LS_AUTH_TOKEN);

            if (!token) {
                return config;
            }

            return { ...config, headers: { ...config.headers, Authorization: token } }
        }
    )
}

export const axiosResponse = () => {
    axios.interceptors.response.use(undefined, (error) => {
        if (error.response.data.code === 9101) {
            localStorage.removeItem(LS_AUTH_TOKEN);
            window.location.href = "/login";
        }
        return Promise.reject(error);
    });
}
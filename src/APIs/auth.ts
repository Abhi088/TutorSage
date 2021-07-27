import axios from "axios";
import { User } from "../Models/User";
import { BASE_URL, LS_AUTH_TOKEN } from "../Constants/constants";
import { axiosRequest, axiosResponse } from "../Axios/axios";

axiosRequest();
axiosResponse();

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);

    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
        return response.data.user;
    });
};

export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
}

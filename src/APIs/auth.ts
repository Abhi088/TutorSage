import axios from "axios";
import { Me, MeChangeAble } from "../Models/Me";
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
    user: Me;
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

interface MeResponse {
    data: Me;
}

export const me = () => {
    const url = BASE_URL + "/me";
    return axios.get<MeResponse>(url);
    // .then((response) => response.data.data);
};

export const updateUser = async (data: MeChangeAble) => {
    try {
        const update = await axios.put(`${BASE_URL}/me`, data);
        return update;
    } catch (error) {
        console.log("Not able to patch the information!");
    }
};
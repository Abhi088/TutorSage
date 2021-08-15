import axios from "axios";
import { axiosRequest, axiosResponse, get } from "../Axios/axios";
import { BASE_URL } from "../Constants/constants";
import { User } from "../Models/User";


axiosRequest();
axiosResponse();

//export interface UserRequest {}

interface UserResponse {
    data: User[];
}

export const fetchUsers = () => {
    const url = BASE_URL + "/people";

    return get<UserResponse>(url);
}

export const fetchOneUser = (id: string) => {
    const url = BASE_URL + "/people/" + id;

    return axios.get<UserResponse>(url);
}
import { Group } from "../Models/Groups";
import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { axiosRequest, axiosResponse, get } from "../Axios/axios";

axiosRequest();
axiosResponse();

export interface GroupRequest {
    limit?: number;
    offset?: number;
    query: string;
    status: "all-groups";
}

interface GroupResponse {
    data: Group[];
}

export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";

    return get<GroupResponse>(url, { params: data });
}

export const fetchOneGroup = (id: string) => {
    const url = BASE_URL + "/groups/" + id;

    return axios.get<GroupResponse>(url);
}
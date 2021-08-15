import { Group } from "../Models/Groups";
// import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { axiosRequest, axiosResponse, get } from "../Axios/axios";
import { CancelToken } from "axios";

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

export const fetchGroups = (data: GroupRequest, token?: CancelToken) => {
    const url = BASE_URL + "/groups";

    return get<GroupResponse>(url, { params: data, cancelToken: token });
    // .then((response) => { return response.data.data })
    // .catch((e) => console.log(e));
}
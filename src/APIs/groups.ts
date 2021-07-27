import { Groups } from "../Models/Groups";
import axios from "axios";
import { BASE_URL } from "../Constants/constants";
import { axiosRequest, axiosResponse } from "../Axios/axios";

axiosRequest();
axiosResponse();

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups";
}

interface GroupResponse {
    data: Groups[];
}

export const fetchGroups = async (data: GroupRequest) => {
    const url = BASE_URL + "/groups";

    return await axios
        .get<GroupResponse>(url, { params: data })
        .then((response) => { return response })
        .catch((e) => console.log(e));
}
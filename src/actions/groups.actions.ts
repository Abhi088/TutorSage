import { Group } from "../Models/Groups";
import { GROUPS_FETCH, GROUPS_QUERY } from "./actions.constants";

export const groupsFetchAction = (groups: Group[], query: string) => ({ type: GROUPS_FETCH, payload: { groups, query } });
export const groupsQueryAction = (query: string) => ({ type: GROUPS_QUERY, payload: query });
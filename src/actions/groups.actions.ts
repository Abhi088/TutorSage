import { Group } from "../Models/Groups";
import { GROUPS_FETCH, GROUP_QUERY_ONE, GROUPS_QUERY, GROUP_FETCH_ONE, GROUP_FETCH_ONE_ERROR } from "./actions.constants";

export const groupsFetchAction = (groups: Group[], query: string) => ({ type: GROUPS_FETCH, payload: { groups, query } });
export const groupsQueryAction = (query: string) => ({ type: GROUPS_QUERY, payload: query });

export const groupQueryOneAction = (id: number) => ({ type: GROUP_QUERY_ONE, payload: id });
export const groupFetchOneAction = (group: Group) => ({ type: GROUP_FETCH_ONE, payload: group });
export const groupFetchOneError = (id: number, msg: string) => ({ type: GROUP_FETCH_ONE_ERROR, payload: { id, msg } });
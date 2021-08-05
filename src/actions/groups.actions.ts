import { bindActionCreators } from "redux";
import { Group } from "../Models/Groups";
import { GROUPS_FETCH, GROUPS_QUERY } from "./actions.constants";
import { store } from "../store";

const groupFetch = (groups: Group[], query: string) => ({ type: GROUPS_FETCH, payload: { groups, query } });
const groupQuery = (query: string) => ({ type: GROUPS_QUERY, payload: query });

export const groupActions = bindActionCreators({
    fetch: groupFetch,
    query: groupQuery
}, store.dispatch);
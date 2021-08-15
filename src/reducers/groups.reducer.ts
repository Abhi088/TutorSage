import { Reducer } from "redux";
import { GROUPS_FETCH, GROUPS_QUERY } from "../actions/actions.constants";
import { Group } from "../Models/Groups";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
    query: string;
    loadingQuery: { [query: string]: boolean };
    queryMap: { [query: string]: number[] };
}

const initialState = {
    byId: {},
    query: "",
    queryMap: {},
    loadingQuery: {},
};

export const groupReducer: Reducer<GroupState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GROUPS_QUERY:
            return {
                ...state, query: action.payload,
                loadingQuery: { ...state.loadingQuery, [action.payload]: true }
            };
        case GROUPS_FETCH:
            const groups: Group[] = action.payload.groups;
            const groupIds = getIds(groups);

            const newState = addMany(state, groups) as GroupState;

            return {
                ...newState,
                queryMap: {
                    ...state.queryMap,
                    [action.payload.query]: groupIds
                },
                loadingQuery: {
                    ...newState.loadingQuery,
                    [action.payload.query]: false,
                }
            }
        default:
            return state;
    }
}
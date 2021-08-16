import { Reducer } from "redux";
import { GROUPS_FETCH, GROUPS_QUERY, GROUP_FETCH_ONE, GROUP_FETCH_ONE_ERROR, GROUP_QUERY_ONE } from "../actions/actions.constants";
import { Group } from "../Models/Groups";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorForOne } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
    query: string;
    queryMap: { [query: string]: number[] };
}

const initialState = {
    ...initialEntityState,
    query: "",
    queryMap: {},
};

export const groupsReducer: Reducer<GroupState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GROUPS_QUERY:
            return {
                ...state, query: action.payload,
                loadingList: true
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
                loadingList: false
            }
        case GROUP_QUERY_ONE: return select(state, action.payload) as GroupState;
        case GROUP_FETCH_ONE: return addOne(state, action.payload, false) as GroupState;
        case GROUP_FETCH_ONE_ERROR:
            const { id, msg } = action.payload;
            return setErrorForOne(state, id, msg) as GroupState;
        default:
            return state;
    }
}
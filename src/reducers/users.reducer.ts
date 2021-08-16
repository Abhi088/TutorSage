import { Reducer } from "redux";
import { USERS_FETCH, USERS_QUERY, USER_FETCH_ONE, USER_FETCH_ONE_ERROR, USER_QUERY_ONE } from "../actions/actions.constants";
import { User } from "../Models/User";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorForOne } from "./entity.reducer";

export interface UserState extends EntityState<User> {
    usersId: number[]
}

const initialState = {
    ...initialEntityState,
    usersId: []
};

export const usersReducer: Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case USERS_QUERY: return {
            ...state,
            loadingList: true
        }
        case USERS_FETCH:
            const users: User[] = action.payload;
            const usersId = getIds(users);
            const newState = addMany(state, users) as UserState;

            return {
                ...newState,
                usersId: usersId,
                loadingList: false
            }
        case USER_QUERY_ONE: return select(state, action.payload) as UserState;
        case USER_FETCH_ONE: return addOne(state, action.payload, false) as UserState;
        case USER_FETCH_ONE_ERROR: const { id, msg } = action.payload;
            return setErrorForOne(state, id, msg) as UserState;
        default:
            return state;
    }
}
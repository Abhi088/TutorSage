import { Reducer } from "redux";
import { USERS_FETCH, USER_FETCH_ONE } from "../actions/actions.constants";
import { User } from "../Models/User";
import { addMany, addOne, EntityState, getIds } from "./entity.reducer";

export interface UserState extends EntityState<User> {
    usersId: number[]
}

const initialState = {
    byId: {},
    usersId: []
};

export const usersReducer: Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case USERS_FETCH:
            const users: User[] = action.payload;
            const usersId = getIds(users);
            console.log(usersId)
            const newState = addMany(state, users) as UserState;

            return {
                ...newState,
                usersId: usersId
            }
        case USER_FETCH_ONE: return addOne(state, action.payload) as UserState;
        default:
            return state;
    }
}
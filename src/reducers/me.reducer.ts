import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { Me } from "../Models/Me";
import { addOne, EntityState } from "./entity.reducer";

export interface UserState extends EntityState<Me> { };

const initialState = {
    byId: {},
};

export const meReducer: Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return addOne(state, action.payload) as UserState;
        default:
            return state;
    }
}
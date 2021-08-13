import { Reducer } from "redux";
import { SET_PATH } from "../actions/actions.constants";

export interface PathState {
    path: string[];
}

const initialState = {
    path: window.location.pathname.split("/").splice(1)
}

export const pathReducer: Reducer<PathState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_PATH:
            const path = action.payload as string[];
            return { ...state, path: path };
        default:
            return state;
    }
}
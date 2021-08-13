import { bindActionCreators } from "redux";
import { store } from "../store";
import { SET_PATH } from "./actions.constants";

const setPath = (p: string[]) => ({ type: SET_PATH, payload: p });

export const pathActions = bindActionCreators({
    setPath
}, store.dispatch);
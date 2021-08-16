import { bindActionCreators } from "redux";
import { Me } from "../Models/Me";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";

const meFetch = (u: Me) => ({ type: ME_FETCH, payload: u });
const meLogin = (u: Me) => ({ type: ME_LOGIN, payload: u });

export const authActions = bindActionCreators({
    fetch: meFetch,
    login: meLogin
}, store.dispatch);
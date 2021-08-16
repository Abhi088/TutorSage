// import { bindActionCreators } from "redux";
import { Me } from "../Models/Me";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";

export const meFetch = (u: Me) => ({ type: ME_FETCH, payload: u });
export const meLogin = (data: { email: string, password: string }) => ({ type: ME_LOGIN, payload: data });

// export const authActions = bindActionCreators({
//     fetch: meFetch,
//     login: meLogin
// }, store.dispatch);
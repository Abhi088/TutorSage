// import { bindActionCreators } from "redux";
import { Me } from "../Models/Me";
import { ME_AUTH_CHECK, ME_FETCH, ME_LOGIN } from "./actions.constants";

export const meFetchAction = (u: Me) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (data: { email: string, password: string }) => ({ type: ME_LOGIN, payload: data });
export const meAuthCheckAction = () => ({ type: ME_AUTH_CHECK });

// export const authActions = bindActionCreators({
//     fetch: meFetch,
//     login: meLogin
// }, store.dispatch);
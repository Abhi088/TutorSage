import { Me, MeChangeAble } from "../Models/Me";
import { ME_AUTH_CHECK, ME_FETCH, ME_LOGIN, ME_UPDATE } from "./actions.constants";

export const meFetchAction = (u: Me) => ({ type: ME_FETCH, payload: u });
export const meLoginAction = (data: { email: string, password: string }) => ({ type: ME_LOGIN, payload: data });
export const meAuthCheckAction = () => ({ type: ME_AUTH_CHECK });
export const meUpdateAction = (data: MeChangeAble) => ({ type: ME_UPDATE, payload: data });
import { User } from "../Models/User";
import { USERS_FETCH, USER_QUERY_ONE, USER_FETCH_ONE, USERS_QUERY, USER_FETCH_ONE_ERROR } from "./actions.constants";

export const usersFetchAction = (users: User[]) => ({ type: USERS_FETCH, payload: users });
export const usersQueryAction = () => ({ type: USERS_QUERY });

export const userQueryOneAction = (id: number) => ({ type: USER_QUERY_ONE, payload: id });
export const userFetchOneAction = (user: User) => ({ type: USER_FETCH_ONE, payload: user });
export const userFetchOneError = (id: number, msg: string) => ({ type: USER_FETCH_ONE_ERROR, payload: { id, msg } });
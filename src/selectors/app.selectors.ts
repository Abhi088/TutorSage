import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;
export const meStateSelector = (state: AppState) => state.me;
export const authStateSelector = (state: AppState) => state.auth;
export const pathStateSelector = (state: AppState) => state.path;
export const usersStateSelector = (state: AppState) => state.users;
import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;
export const userStateSelector = (state: AppState) => state.user;
export const authStateSelector = (state: AppState) => state.auth;
export const pathStateSelector = (state: AppState) => state.path;
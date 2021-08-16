import { createSelector } from "reselect";
import { usersStateSelector } from "./app.selectors";

export const usersByIdSelector = createSelector([usersStateSelector], (usersState) => usersState.byId);
export const usersIdSelector = createSelector([usersStateSelector], (usersState) => usersState.usersId);

export const usersFetchSelector = createSelector([
    usersByIdSelector, usersIdSelector
], (byId, usersId) => {
    const users = usersId.map((id) => byId[id]);
    return users;
});
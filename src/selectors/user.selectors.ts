import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";
import { authIdSelector } from "./auth.selectors";

export const userByIdSelector = createSelector([userStateSelector], (userState) => userState.byId);

export const meSelector = createSelector([
    authIdSelector, userByIdSelector
], (authId, userById) => (authId === undefined) ? undefined : userById[authId]);
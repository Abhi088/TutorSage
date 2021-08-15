import { createSelector } from "reselect";
import { meStateSelector } from "./app.selectors";
import { authIdSelector } from "./auth.selectors";

export const meByIdSelector = createSelector([meStateSelector], (meState) => meState.byId);

export const meSelector = createSelector([
    authIdSelector, meByIdSelector
], (authId, meById) => (authId === undefined) ? undefined : meById[authId]);
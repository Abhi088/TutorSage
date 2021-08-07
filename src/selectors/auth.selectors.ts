import { authStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const authIdSelector = createSelector([authStateSelector], (authState) => authState.id);


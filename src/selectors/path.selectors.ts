import { pathStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const pathSelector = createSelector([pathStateSelector], (pathState) => pathState.path);


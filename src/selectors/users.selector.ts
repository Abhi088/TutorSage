import { createSelector } from "reselect";
import { usersStateSelector } from "./app.selectors";

export const usersByIdSelector = createSelector([usersStateSelector], (usersState) => usersState.byId);
export const usersIdSelector = createSelector([usersStateSelector], (usersState) => usersState.usersId);
export const userSelectedIdSelector = createSelector([usersStateSelector], (usersState) => usersState.selectedId);
export const usersLoadingListSelector = createSelector([usersStateSelector], (usersState) => usersState.loadingList);
export const userLoadingOneSelector = createSelector([usersStateSelector], (usersState) => usersState.loadingOne);
export const userLoadingOneErrorSelector = createSelector([usersStateSelector], (usersState) => usersState.loadingOneError);

export const selectedUserSelector = createSelector([usersByIdSelector, userSelectedIdSelector], (byId, selectedId) => selectedId && byId[selectedId]);

export const usersFetchSelector = createSelector([
    usersByIdSelector, usersIdSelector
], (byId, usersId) => {
    const users = usersId.map((id) => byId[id]);
    return users;
});
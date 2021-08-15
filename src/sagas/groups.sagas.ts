import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroups } from "../APIs/groups";

export function* groupsFetch(action: AnyAction): Generator<any> {
    const output: any = yield call(fetchGroups, { query: action.payload, status: "all-groups" });
    yield put(groupsFetchAction(output, action.payload));
}

export function* watchGroupQueryChanged() {
    yield takeEvery(GROUPS_QUERY, groupsFetch);
}
import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/actions.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroups } from "../APIs/groups";

export function* groupsFetch(action: AnyAction): Generator<any> {
    yield delay(1000);
    const groupsResponse: any = yield call(fetchGroups, { query: action.payload, status: "all-groups" });
    yield put(groupsFetchAction(groupsResponse.data.data, action.payload));
}

export function* watchGroupQueryChanged() {
    yield takeLatest(GROUPS_QUERY, groupsFetch);
}
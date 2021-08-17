import { all, takeEvery, takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_ONE, GROUPS_QUERY } from "../actions/actions.constants";
import { groupFetchOneAction, groupFetchOneError, groupsFetchAction } from "../actions/groups.actions";
import { fetchGroups, fetchOneGroup } from "../APIs/groups";

function* groupsFetch(action: AnyAction): Generator<any> {
    yield delay(1000);
    const groupsResponse: any = yield call(fetchGroups, { query: action.payload, status: "all-groups" });
    yield put(groupsFetchAction(groupsResponse.data.data, action.payload));
}

function* groupFetchOne(action: AnyAction): Generator<any> {
    try {
        const groupResponse: any = yield call(fetchOneGroup, action.payload);
        yield put(groupFetchOneAction(groupResponse.data.data));
    } catch (e) {
        const error = e.response.data?.message || "Some error occurred";
        yield put(groupFetchOneError(action.payload, error));
    }
}

export function* watchGroupQueryChanged() {
    yield all([
        takeLatest(GROUPS_QUERY, groupsFetch),
        takeEvery(GROUP_QUERY_ONE, groupFetchOne)
    ]);
}
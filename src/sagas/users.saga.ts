import { takeEvery, takeLatest, call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { USERS_QUERY, USER_QUERY_ONE } from "../actions/actions.constants";
import { userFetchOneAction, usersFetchAction } from "../actions/users.action";
import { fetchOneUser, fetchUsers } from "../APIs/users";

function* usersFetch(action: AnyAction): Generator<any> {
    yield delay(1000);
    const usersResponse: any = yield call(fetchUsers);
    yield put(usersFetchAction(usersResponse.data.data));
}

function* userFetchOne(action: AnyAction): Generator<any> {
    const userResponse: any = yield call(fetchOneUser, action.payload);
    yield put(userFetchOneAction(userResponse.data.data));
}

export function* watchUserQueryChanged() {
    yield takeLatest(USERS_QUERY, usersFetch);
    yield takeEvery(USER_QUERY_ONE, userFetchOne);
}
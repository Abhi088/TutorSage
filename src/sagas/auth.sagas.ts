import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { ME_AUTH_CHECK, ME_LOGIN, ME_UPDATE } from "../actions/actions.constants";
import { meFetchAction } from "../actions/auth.actions";
import { login, me, updateMe } from "../APIs/auth";

function* meLogin(action: AnyAction): Generator<any> {
    const loginResponse: any = yield call(login, action.payload);
    yield put(meFetchAction(loginResponse));
    window.location.href = "/dashboard";
}

function* meAuthCheck(action: AnyAction): Generator<any> {
    const meResponse: any = yield call(me);
    yield put(meFetchAction(meResponse.data.data));
}

function* meUpdate(action: AnyAction): Generator<any> {
    console.log("saga running")
    const meResponse: any = yield call(updateMe, action.payload);
    console.log(meResponse?.data);
    window.location.href = "/profile";
}

export function* watchMeAuth() {
    yield takeEvery(ME_LOGIN, meLogin);
    yield takeEvery(ME_AUTH_CHECK, meAuthCheck);
    yield takeEvery(ME_UPDATE, meUpdate);
}
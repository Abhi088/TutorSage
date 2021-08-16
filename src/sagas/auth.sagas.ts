import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { ME_LOGIN } from "../actions/actions.constants";
import { meFetch } from "../actions/auth.actions";
import { login } from "../APIs/auth";

function* meLogin(action: AnyAction): Generator<any> {
    const loginResponse: any = yield call(login, action.payload);
    console.log(loginResponse);
    yield put(meFetch(loginResponse));
    window.location.href = "/dashboard";
}

export function* watchMeLogin() {
    yield takeEvery(ME_LOGIN, meLogin);
}
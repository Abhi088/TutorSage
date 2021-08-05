import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/users.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { authReducer } from "./reducers/auth.reducer";

const reducer = combineReducers({
    user: userReducer,
    groups: groupReducer,
    auth: authReducer
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
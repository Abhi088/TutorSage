import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/users.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { pathReducer } from "./reducers/path.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";

const reducer = combineReducers({
    user: userReducer,
    groups: groupReducer,
    auth: authReducer,
    path: pathReducer
});

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    ))
);

sagaMiddleware.run(watchGroupQueryChanged);

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
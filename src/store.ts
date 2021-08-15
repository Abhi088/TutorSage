import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { meReducer } from "./reducers/me.reducer";
import { groupsReducer } from "./reducers/groups.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { pathReducer } from "./reducers/path.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";
import { usersReducer } from "./reducers/users.reducer";
import { watchUserQueryChanged } from "./sagas/users.saga";

const reducer = combineReducers({
    me: meReducer,
    users: usersReducer,
    groups: groupsReducer,
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
sagaMiddleware.run(watchUserQueryChanged);

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
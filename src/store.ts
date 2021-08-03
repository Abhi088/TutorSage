import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./Models/Groups";
import { User } from "./Models/User";

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const GROUPS_QUERY = "groups/query";
const GROUPS_FETCH = "groups/fetch";
const UI_SIDEBAR_TOGGLE = "ui/sidebar_toggle";

export interface AppState {
    me?: User;
    isSidebarOpen: boolean;

    groupQuery: string;
    groupQueryMap: { [query: string]: number[] };
    groups: { [id: number]: Group };
}

const initialState: AppState = {
    me: undefined,
    isSidebarOpen: true,

    groupQuery: "",
    groupQueryMap: {},
    groups: {},
};

const reducer: Reducer<AppState> = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return { ...state, me: action.payload };
        case UI_SIDEBAR_TOGGLE:
            return { ...state, isSidebarOpen: action.payload };
        case GROUPS_QUERY:
            return { ...state, groupQuery: action.payload };
        case GROUPS_FETCH:
            const groups = action.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);

            const groupMap = groups.reduce((prev, group) => {
                return { ...prev, [group.id]: group };
            }, {});
            console.log(groupMap);
            return {
                ...state,
                groupQueryMap: {
                    ...state?.groupQueryMap,
                    [action.payload.query]: groupIds
                },
                groups: { ...state.groups, ...groupMap },
            }
        default:
            return state;
    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const uiSidebarToggle = (open: boolean) => ({ type: UI_SIDEBAR_TOGGLE, payload: open });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
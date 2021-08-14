import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../APIs/groups";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {

    const queryMap = groupQueryMapSelector(store.getState());

    const query = request.query;
    const groupIds = queryMap[query];
    groupActions.query(query, !groupIds);

    if (groupIds) {
        return;
    }

    fetchGroupsApi(request).then(groups => {
        groupActions.fetch(groups!, query);
    });
};
// import { useEffect } from 'react';
import { FC, memo } from 'react';
// import { pathActions } from '../../actions/path.actions';
import { fetchGroups } from '../../middlewares/groups.middleware';
import GroupData from '../../components/GroupData';
import { groupLoadingSelector, groupQuerySelector, groupsFetchSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';
import Spinner from '../../components/Spinner/Spinner';
// import { groupActions } from '../../actions/groups.actions';

interface Props { }

const Groups: FC<Props> = (props) => {

    const query = useAppSelector(groupQuerySelector);

    const loading = useAppSelector(groupLoadingSelector);

    const groups = useAppSelector(groupsFetchSelector);

    // useEffect(() => {
    //     pathActions.setPath(window.location.pathname.split("/").splice(1));
    //     fetchGroups({ status: "all-groups", query: query })
    //         .then((groups) => {
    //             groupActions.fetch(groups!, query) // check this once
    //         })
    // }, [query]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="m-auto appContainer_min_height">
            <div className="flex flex-row items-center">
                <input
                    type="text"
                    placeholder="Search Groups"
                    className="w-2/3 border-2 border-black"
                    value={query}
                    onChange={(event) => {
                        // groupActions.query(event.target.value);
                        fetchGroups({ query: event.target.value, status: "all-groups" });
                    }}
                />
                {loading && <Spinner type="button" />}
            </div>
            {groups.map((group, index) => {
                return (<div
                    key={group.id}>
                    <GroupData className={`${(index % 2 === 0) ? "bg-white" : "bg-gray-100"}`} name={group.name} desc={group.description} imgSrc={group.group_image_url}></GroupData>
                </div>);
            })}
        </div>
    );
};

Groups.defaultProps = {};

export default memo(Groups);
import { useEffect } from 'react';
import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGroups } from '../../APIs/groups';
import GroupData from '../../components/GroupData';
import { useAppSelector } from '../../store';

interface Props { }

const Dashboard: FC<Props> = (props) => {

    const query = useAppSelector(state => state.groupQuery);

    const groups = useAppSelector(state => {
        const groupsIds = state.groupQueryMap[state.groupQuery] || [];
        const group = groupsIds.map((id) => state.groups[id]);
        return group;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        fetchGroups({ status: "all-groups", query: query })
            .then((groups) => {
                dispatch({ type: "groups/fetch", payload: { groups: groups, query } })
            });
    }, [query]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="m-auto mt-20">
            This is Dashboard page.
            <form className="flex flex-row space-x-3 mb-10">
                <input
                    type="text"
                    placeholder="Search Groups"
                    className="w-2/3 border-2 border-black"
                    value={query}
                    onChange={(event) => {
                        dispatch({ type: "groups/query", payload: event.target.value });
                    }}
                />
            </form>
            {groups.map((group, index) => {
                return (<div
                    key={index}>
                    <GroupData className={`${(index % 2 === 0) ? "bg-white" : "bg-gray-100"}`} name={group.name} desc={group.description} imgSrc={group.group_image_url}></GroupData>
                </div>);
            })}
            <Link to="/recordings"><span className="underline text-blue-500">Go to Recordings</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
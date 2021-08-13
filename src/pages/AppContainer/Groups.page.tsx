import { useEffect } from 'react';
import { FC, memo } from 'react';
import { groupActions } from '../../actions/groups.actions';
import { fetchGroups } from '../../APIs/groups';
import GroupData from '../../components/GroupData';
import { groupQuerySelector, groupsFetchSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';

interface Props { }

const Groups: FC<Props> = (props) => {

    const query = useAppSelector(groupQuerySelector);

    const groups = useAppSelector(groupsFetchSelector);

    useEffect(() => {
        fetchGroups({ status: "all-groups", query: query })
            .then((groups) => {
                groupActions.fetch(groups!, query) // check this once
            })
    }, [query]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="m-auto appContainer_min_height">
            <input
                type="text"
                placeholder="Search Groups"
                className="w-2/3 border-2 border-black"
                value={query}
                onChange={(event) => {
                    groupActions.query(event.target.value)
                }}
            />
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
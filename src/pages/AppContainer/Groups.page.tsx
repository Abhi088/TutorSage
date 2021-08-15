import { FC, memo } from 'react';
import GroupData from '../../components/GroupData';
import { groupQuerySelector, groupsFetchSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { groupsQueryAction } from '../../actions/groups.actions';

interface Props { }

const Groups: FC<Props> = (props) => {

    const query = useAppSelector(groupQuerySelector);

    //const loading = useAppSelector(groupLoadingSelector);

    const groups = useAppSelector(groupsFetchSelector);
    const dispatch = useDispatch();

    return (
        <div className="m-auto appContainer_min_height">
            <div className="flex flex-row items-center">
                <input
                    type="text"
                    placeholder="Search Groups"
                    className="w-2/3 border-2 border-black"
                    value={query}
                    onChange={(event) => {
                        dispatch(groupsQueryAction(event.target.value));
                    }}
                />
                {/* {loading && <Spinner type="button" />} */}
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
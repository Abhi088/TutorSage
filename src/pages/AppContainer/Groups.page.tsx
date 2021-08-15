import { FC, memo, useEffect } from 'react';
import GroupData from '../../components/GroupData';
import { groupLoadingSelector, groupQuerySelector, groupsFetchSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { groupsQueryAction } from '../../actions/groups.actions';
import Spinner from '../../components/Spinner/Spinner';
import { pathActions } from '../../actions/path.actions';

interface Props { }

const Groups: FC<Props> = (props) => {

    useEffect(() => { pathActions.setPath(window.location.pathname.split("/").splice(1)); })


    const query = useAppSelector(groupQuerySelector);

    const loading = useAppSelector(groupLoadingSelector);

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
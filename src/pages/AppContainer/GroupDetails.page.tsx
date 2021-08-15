import { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { groupQueryOneAction } from '../../actions/groups.actions';
import LinkTo from '../../components/LinkTo';
import Spinner from '../../components/Spinner/Spinner';
import { groupByIdSelector } from '../../selectors/groups.selectors';
import { useAppSelector } from '../../store';

interface Props { }

const GroupDetails: FC<Props> = (props) => {

    const groupId = +useParams<{ groupId: string }>().groupId;

    const groupsByIds = useAppSelector(groupByIdSelector);

    const dispatch = useDispatch();

    const group = groupsByIds[groupId];

    useEffect(() => {
        dispatch(groupQueryOneAction(groupId));
    }, [groupId]); //eslint-disable-line react-hooks/exhaustive-deps

    if (!group) {
        return <Spinner />
    }

    return (
        <div className="mx-auto flex flex-col space-y-10 items-center appContainer_min_height">
            <div className="">Group {group.name}</div>
            <LinkTo to={`/groups/${groupId + 1}`}>Next Group</LinkTo>
        </div>
    );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
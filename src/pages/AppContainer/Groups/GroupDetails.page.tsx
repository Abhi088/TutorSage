import { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { groupQueryOneAction } from '../../../actions/groups.actions';
import LinkTo from '../../../components/LinkTo';
import Spinner from '../../../components/Spinner/Spinner';
import { loadingOneErrorSelector, loadingOneSelector, selectedGroupSelector } from '../../../selectors/groups.selectors';
import { useAppSelector } from '../../../store';

interface Props { }

const GroupDetails: FC<Props> = (props) => {

    const groupId = +useParams<{ groupId: string }>().groupId;

    const group = useAppSelector(selectedGroupSelector);
    const error = useAppSelector(loadingOneErrorSelector);
    const loading = useAppSelector(loadingOneSelector);
    console.log(loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(groupQueryOneAction(groupId));
    }, [groupId]); //eslint-disable-line react-hooks/exhaustive-deps

    if (!group && !loading) {
        return <div>
            {error}
            <LinkTo to={`/groups/${groupId + 1}`}>Next Group</LinkTo>
        </div>
    }

    return (
        <div>
            {loading && <Spinner type="button" />}
            {group && <div>Group {group.name}</div>}
            <LinkTo to={`/groups/${groupId + 1}`}>Next Group</LinkTo>
        </div>
    );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
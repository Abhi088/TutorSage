import { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { groupQueryOneAction } from '../../../actions/groups.actions';
import Avatar from '../../../components/Avatar/Avatar';
import LinkTo from '../../../components/LinkTo';
import Spinner from '../../../components/Spinner/Spinner';
import { groupLoadingOneErrorSelector, groupLoadingOneSelector, selectedGroupSelector } from '../../../selectors/groups.selectors';
import { useAppSelector } from '../../../store';

interface Props { }

const GroupDetails: FC<Props> = (props) => {

    const groupId = +useParams<{ groupId: string }>().groupId;

    const group = useAppSelector(selectedGroupSelector);
    const error = useAppSelector(groupLoadingOneErrorSelector);
    const loading = useAppSelector(groupLoadingOneSelector);
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
            {group && <div>GroupName: {group.name}
                <br /><br />Description: {group.description}
                <br /><br /><Avatar imgSrc={group.group_image_url} showStatus={false}></Avatar></div>}
            <LinkTo to={`/groups/${groupId + 1}`}>Next Group</LinkTo>
            <br /> i have yet not done the styling on website
        </div>
    );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
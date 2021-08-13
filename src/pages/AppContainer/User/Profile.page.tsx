import { FC, memo } from 'react';
import LinkTo from '../../../components/LinkTo';
import { useAppSelector } from '../../../store';

interface Props { }

const Profile: FC<Props> = (props) => {

    const user = useAppSelector((state) => state.user.byId[state.auth.id!]);

    return (<div className="flex flex-col space-y-5">
        <LinkTo to="/profile/edit">Edit Profile</LinkTo>
        <LinkTo to="/dashboard">Go to dashboard</LinkTo>
        {user.first_name}
    </div>);
};

Profile.defaultProps = {};

export default memo(Profile);
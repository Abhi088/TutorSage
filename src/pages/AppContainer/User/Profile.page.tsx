import { FC, memo } from 'react';
import LinkTo from '../../../components/LinkTo';
import { useAppSelector } from '../../../store';

interface Props { }

const Profile: FC<Props> = (props) => {

    const user = useAppSelector((state) => state.user.byId[state.auth.id!]);

    return (<div>
        <LinkTo to="/profile/edit" text="Edit Profile"></LinkTo>
        {user.first_name}
    </div>);
};

Profile.defaultProps = {};

export default memo(Profile);
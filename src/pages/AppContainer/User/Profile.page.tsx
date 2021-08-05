import { FC, memo } from 'react';
import LinkTo from '../../../components/LinkTo';

interface Props { }

const Profile: FC<Props> = (props) => {
    return (<div>
        <LinkTo to="/profile/edit" text="Edit Profile"></LinkTo>
    </div>);
};

Profile.defaultProps = {};

export default memo(Profile);
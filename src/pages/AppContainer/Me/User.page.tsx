import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './Profile.page';
import EditProfile from "./EditProfile.page";

interface Props {
}

const User: FC<Props> = (props) => {
    return (
        <Switch>
            <Route path='/profile' exact>
                <Profile></Profile>
            </Route>
            <Route path='/profile/edit'>
                <EditProfile></EditProfile>
            </Route>
        </Switch>
    );
};

User.defaultProps = {};

export default memo(User);
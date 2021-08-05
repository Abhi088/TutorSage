import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './Profile.page';
import { lazy } from "react";

const EditProfileLazy = lazy(() => import("./EditProfile.page"));

interface Props {
}

const User: FC<Props> = (props) => {
    return (
        <Switch>
            <Route path='/profile/edit'>
                <EditProfileLazy></EditProfileLazy>
            </Route>
            <Route path='/profile' exact>
                <Profile></Profile>
            </Route>
        </Switch>
    );
};

User.defaultProps = {};

export default memo(User);
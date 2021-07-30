import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthHero from '../../components/AuthHero';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';

interface Props {
}

const Auth: FC<Props> = (props) => {
    return (<div className="flex flex-row justify-between">
        <Switch>
            <Route path='/login'>
                <LoginPage></LoginPage>
            </Route>
            <Route path='/signup'>
                <SignupPage></SignupPage>
            </Route>
        </Switch>
        <AuthHero className="hidden lg:block"></AuthHero>
    </div>)
};

Auth.defaultProps = {};

export default memo(Auth);
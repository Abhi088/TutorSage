import { FC, Suspense, useEffect } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './Constants/constants';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { me } from './APIs/auth';
import { useAppSelector } from './store';
import { meSelector } from './selectors/user.selectors';
import Spinner from './components/Spinner/Spinner';
import { authActions } from './actions/auth.actions';

interface Props { }

const App: FC<Props> = () => {

  const user = useAppSelector(meSelector);

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) return;

    me().then((u) => authActions.fetch(u));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) {
    return <Spinner />
  }

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
          </Route>
          <Route path={["/dashboard", "/groups", "/recordings", "/profile", "/batch/:batchNumber/lecture/:lectureNumber"]}>
            {user ? <AppContainerLazy /> : <Redirect to="/login" />}
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
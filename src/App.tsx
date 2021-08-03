import { FC, Suspense, useEffect } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LS_AUTH_TOKEN } from './Constants/constants';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { me } from './APIs/auth'; //updateMe import
import { meFetchAction, uiSidebarToggle, useAppSelector } from './store';

interface Props { }

const App: FC<Props> = () => {

  const user = useAppSelector((state) => state.me);

  const dispatch = useDispatch();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    // updateMe();
    if (!token) return;

    me().then((u) => dispatch(meFetchAction(u)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTimeout(() => {
      dispatch(uiSidebarToggle(false));
    }, 8000)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user && token) {
    return <div>Ruko Zara, Sabr Karo</div>
  }

  return (
    <Suspense fallback={<div className="text-red-500">Ruko Jara, Sabr Karo</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
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
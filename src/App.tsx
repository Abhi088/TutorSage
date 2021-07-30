import { FC, Suspense, useEffect, useState } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './Constants/constants';
import AppContainerLazy from './pages/AppContainer/AppContainer.lazy';
import AuthLazy from './pages/Auth/Auth.lazy';
import NotFoundPage from './pages/NotFound.page';
import { me, updateMe } from './APIs/auth';
import AppContext from './App.context';
import { User } from './Models/User';

interface Props { }

const App: FC<Props> = () => {

  const [user, setUser] = useState<User>();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    updateMe();
    if (!token) return;
    me().then((u) => setUser(u));
  })

  if (!user && token) {
    return <div>Ruko Zara, Sabr Karo</div>
  }

  return (
    <AppContext.Provider value={{ user, setUser }}>
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
    </AppContext.Provider>
  );
}

export default App;

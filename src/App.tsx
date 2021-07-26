import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login"></Redirect>}
        </Route>
        <Route path={["/login", "/signup"]}>
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
          <AppContainerPage></AppContainerPage>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

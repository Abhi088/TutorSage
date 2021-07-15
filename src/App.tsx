import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
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

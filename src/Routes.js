import React from 'react';
import NavBar from './NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/News"  />
        <Route exact path="/">
          <Redirect to="/News" />
        </Route>
        <Route exact path="/Laughs"  />
      </Switch>
    </div>
  );
};
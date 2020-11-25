import React from 'react';

import ToDo from './components/todo/todo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/todo/header';
import Settings from './components/todo/settings';
import Login from './auth/login.js';
import AuthContext from './auth/context.js';
import Auth from './auth/auth.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <AuthContext>
            <Header />
            <Login />
            <Switch>
              <Route exact path='/todo'>
                <ToDo />
              </Route>
              <Route exact path='/settings'>
                <Auth action='read'>
                  <Settings />
                </Auth>
              </Route>
            </Switch>
          </AuthContext>
        </BrowserRouter>
      </>
    );
  }
}

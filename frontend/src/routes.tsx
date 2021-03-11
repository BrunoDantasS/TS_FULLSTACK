import React from 'react'
import { Route, Switch } from "react-router-dom";
import CreateAdress from './pages/CreateAdress';
import CreateUser from './pages/CreateUser';

import Home from './pages/Home';
import ListAdress from './pages/ListAdress';
import Login from './pages/Login';
import SingleUser from './pages/SingleUser';
import Users from './pages/Users';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/single-user" component={SingleUser}/>
      <Route exact path="/list-adress" component={ListAdress}/>
      <Route exact path="/create-user" component={CreateUser}/>
      <Route exact path="/create-adress" component={CreateAdress}/>
    </Switch>
  )
}

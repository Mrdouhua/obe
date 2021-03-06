import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Index/index';
import User from './routes/User/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user" exact component={User} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

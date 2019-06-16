import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import OnAuthPage from './pages/on-auth';
import DefaultPage from './pages/default';
import NotFoundPage from './pages/not-found';

const Routes = (props) => (
    <Switch>
        <Route {...props} exact path="/" component={DefaultPage} />
        <Route {...props} path="/sign-up" component={SignUpPage} />
        <Route {...props} path="/on-auth" component={OnAuthPage} />
        <Route {...props} component={NotFoundPage} />
    </Switch>
);

export default Routes;
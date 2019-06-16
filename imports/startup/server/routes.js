import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultPage from '../../ui/pages/default';
import SignUpPage from '../../ui/pages/sign-up';
import OnAuthPage from '../../ui/pages/on-auth';
import NotFoundPage from '../../ui/pages/not-found';

const Routes = (props) => (
    <Switch>
        <Route {...props} exact path="/" component={DefaultPage} />
        <Route {...props} path="/sign-up" component={SignUpPage} />
        <Route {...props} path="/on-auth" component={OnAuthPage} />
        <Route {...props} component={NotFoundPage} />
    </Switch>
);

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from './components/loadable';

const Routes = (props) => (
    <Switch>
        <Route {...props} exact path="/" component={loadable({ loader: () => import('./pages/default') })} />
        <Route {...props} path="/sign-up" component={loadable({ loader: () => import('./pages/sign-up') })} />
        <Route {...props} path="/on-auth" component={loadable({ loader: () => import('./pages/on-auth') })} />
        <Route {...props} path="/users/:userId/profile" component={loadable({ loader: () => import('./pages/user-profile') })} />
        <Route {...props} component={loadable({ loader: () => import('./pages/not-found') })} />
    </Switch>
);

export default Routes;
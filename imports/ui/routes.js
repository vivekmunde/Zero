import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultPage from '/imports/ui/pages/default';
import SignUpPage from '/imports/ui/pages/sign-up';
import OnAuthPage from '/imports/ui/pages/on-auth';
import UserProfilePage from '/imports/ui/pages/user-profile';
import NotFoundPage from '/imports/ui/pages/not-found';

const Routes = (props) => (
    <Switch>
        <Route {...props} exact path="/" component={DefaultPage} />
        <Route {...props} path="/sign-up" component={SignUpPage} />
        <Route {...props} path="/on-auth" component={OnAuthPage} />
        <Route {...props} path="/users/:userId/profile" component={UserProfilePage} />
        <Route {...props} component={NotFoundPage} />
    </Switch>
);

export default Routes;
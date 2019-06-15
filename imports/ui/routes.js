import React from 'react';
import { Route } from 'react-router-dom';
import SignUpPage from './pages/sign-up';
import DefaultPage from './pages/default';

const Routes = (props) => (
    <React.Fragment>
        <Route {...props} exact path="/" component={DefaultPage} />
        <Route {...props} path="/sign-up" component={SignUpPage} />
    </React.Fragment>
);

export default Routes;
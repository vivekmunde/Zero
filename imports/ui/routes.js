import React from 'react';
import { Route } from 'react-router-dom';
import AppHeader from './components/app-header';

const Routes = (props) => (
    <React.Fragment>
        <Route {...props} path="/" component={AppHeader} />
    </React.Fragment>
);

export default Routes;
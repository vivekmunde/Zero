import React from 'react';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './routes';

const App = ({ store, location }) => (
    <Provider store={store}>
        <StaticRouter location={location} context={{}}>
            <Routes />
        </StaticRouter>
    </Provider>
);

export default App;
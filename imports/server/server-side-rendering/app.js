import React from 'react';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Routes from '/imports/server/server-side-rendering/routes';
import ThemeProvider from '/imports/ui/components/theme-provider';

const App = ({ store, location }) => (
    <Provider store={store}>
        <ThemeProvider>
            <StaticRouter location={location} context={{}}>
                <Routes />
            </StaticRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
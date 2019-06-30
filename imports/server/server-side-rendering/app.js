import React from 'react';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '/imports/ui/styled/theme';
import Routes from '/imports/server/server-side-rendering/routes';
import StyledGlobal from '/imports/ui/styled/global';

const App = ({ store, location }) => (
    <Provider store={store}>
        <ThemeProvider theme={theme({ isDark: true })}>
            <React.Fragment>
                <StyledGlobal />
                <StaticRouter location={location} context={{}}>
                    <Routes />
                </StaticRouter>
            </React.Fragment>
        </ThemeProvider>
    </Provider>
);

export default App;
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import theme from '/imports/ui/styled/theme';
import { configureStore } from '/imports/ui/redux-store';
import Routes from '/imports/ui/routes';
import '/imports/ui/meteor-hooks/account';
import StyledGlobal from '/imports/ui/styled/global';

const App = (props) => (
    <Provider
        store={configureStore({
            ...(window.__PRELOADED_STATE__ || {}),
            isLoggingIn: Meteor.loggingIn(),
            isLoggedIn: !!Meteor.userId(),
            loggedInUserId: Meteor.userId(),
        })}
    >
        <ThemeProvider theme={theme({ isDark: true })}>
            <React.Fragment>
                <StyledGlobal />
                <Router>
                    <Routes {...props} />
                </Router>
            </React.Fragment>
        </ThemeProvider>
    </Provider >
);

export default App;
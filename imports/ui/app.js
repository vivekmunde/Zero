import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from '/imports/ui/redux-store';
import Routes from '/imports/ui/routes';
import '/imports/ui/meteor-hooks/account';
import ThemeProvider from '/imports/ui/components/theme-provider';

const App = (props) => (
    <Provider
        store={configureStore({
            ...(window.__PRELOADED_STATE__ || {}),
            isLoggingIn: Meteor.loggingIn(),
            isLoggedIn: !!Meteor.userId(),
            loggedInUserId: Meteor.userId(),
            loggedInUser: Meteor.user(),
        })}
    >
        <ThemeProvider>
            <Router>
                <Routes {...props} />
            </Router>
        </ThemeProvider>
    </Provider >
);

export default App;
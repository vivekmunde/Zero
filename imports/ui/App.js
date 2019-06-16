import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './redux-store';
import Routes from './routes';
import './meteor-hooks/account';

const App = (props) => (
    <Provider
        store={configureStore({
            loggingIn: Meteor.loggingIn(),
            loggedInUserId: Meteor.userId()
        })}
    >
        <Router>
            <Routes {...props} />
        </Router>
    </Provider>
);

export default App;
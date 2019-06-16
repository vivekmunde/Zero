import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';
import { getStore } from '../redux-store';


const updateLoggedInUser = (loggedInUser) => ({
    type: 'updateLoggedInUser',
    updateState: () => ({
        loggingIn: Meteor.loggingIn(),
        loggedIn: !!loggedInUser,
        loggedInUser,
    })
});

Accounts.onLogin(() => {
    Tracker.autorun(() => {
        const store = getStore();
        if (store) {
            store.dispatch(updateLoggedInUser(Meteor.user()));
        }
    });
});

Accounts.onLogout(() => {
    const store = getStore();
    if (store) {
        store.dispatch(updateLoggedInUser());
    }
});

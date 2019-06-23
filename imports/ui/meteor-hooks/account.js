import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';
import { getStore } from '/imports/ui/redux-store';


const updateLoggedInUser = (loggedInUser) => ({
    type: 'updateLoggedInUser',
    updateState: () => ({
        isLoggingIn: Meteor.loggingIn(),
        isLoggedIn: !!loggedInUser,
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

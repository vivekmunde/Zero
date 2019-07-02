import { Meteor } from 'meteor/meteor';
import { getStore } from '/imports/ui/redux-store';

const updateLoggedInUser = () => ({
    type: 'updateLoggedInUser',
    updateState: () => ({
        isLoggingIn: Meteor.loggingIn(),
        isLoggedIn: !!Meteor.userId(),
        loggedInUser: Meteor.user()
    })
});

const loadLoggedInUserReduxAction = () => {
    getStore().dispatch(updateLoggedInUser());
};

export default loadLoggedInUserReduxAction;
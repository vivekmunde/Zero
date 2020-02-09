import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { connectDispatch } from 'duxact';

let updateLoddedInUser = () => { };
Tracker.autorun((trackerComputation) => {
    const loggedInUser = Meteor.user();
    if (loggedInUser) {
        updateLoddedInUser({
            isLoggingIn: Meteor.loggingIn(),
            isLoggedIn: !!Meteor.userId(),
            loggedInUser
        });
        trackerComputation.stop();
    }
});

class LoggedInUserLoader extends React.Component {
    constructor(props, context) {
        super(props, context);
        updateLoddedInUser = props.updateLoddedInUser;
    }

    componentDidMount() {
        this.observeLoggedInStatus();
    }

    componentWillUnmount() {
        if (this.trackerComputation) {
            this.trackerComputation.stop();
        }
    }

    observeLoggedInStatus = () => {
        Tracker.autorun((trackerComputation) => {
            this.trackerComputation = trackerComputation;
            this.props.updateLoddedInUser({
                isLoggingIn: Meteor.loggingIn(),
                isLoggedIn: !!Meteor.userId(),
                loggedInUser: Meteor.user()
            });
        });
    }

    render() {
        return null;
    }
}

export default connectDispatch(
    dispatch => ({
        updateLoddedInUser: payload => dispatch(() => payload),
    }),
)(LoggedInUserLoader);
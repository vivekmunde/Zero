import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getLoggedInUser() {
        return Meteor.user();
    }
});
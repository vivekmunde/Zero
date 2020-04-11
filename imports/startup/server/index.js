import { Meteor } from 'meteor/meteor';
import configureSocialAuthService from '/imports/startup/server/configure-social-auth-service';
import '/imports/server';

Meteor.startup(() => {
    configureSocialAuthService();
});
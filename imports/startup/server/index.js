import { Meteor } from 'meteor/meteor';
import './server-side-rendering';
import configureSocialAuthService from './social-auth-service-config';

Meteor.startup(() => {
    configureSocialAuthService();
});
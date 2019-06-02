import { Meteor } from 'meteor/meteor';
import { configureSocialAuthServiceForFacebook } from './socialAuthServiceConfig';

Meteor.startup(() => {
    configureSocialAuthServiceForFacebook();
});
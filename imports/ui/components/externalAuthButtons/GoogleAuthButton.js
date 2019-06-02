import { Meteor } from 'meteor/meteor';
import React from 'react';

const GoogleAuthButton = () => (
    <button
        onClick={() => {
            Meteor.loginWithGoogle({
                requestPermissions: Meteor.settings.public.google.requestPermissions,
                redirectUrl: Meteor.settings.public.facebook.redirectUrl,
                loginStyle: Meteor.settings.public.facebook.loginStyle,
            }, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Success');
                }
            });
        }}
    >
        Google Auth
        </button>
);

export default GoogleAuthButton;
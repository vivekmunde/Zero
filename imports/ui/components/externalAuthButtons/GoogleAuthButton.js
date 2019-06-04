import { Meteor } from 'meteor/meteor';
import React from 'react';

const GoogleAuthButton = () => (
    <button
        className="ui google plus button"
        onClick={() => {
            Meteor.loginWithGoogle({
                requestPermissions: Meteor.settings.public.google.requestPermissions,
                redirectUrl: Meteor.settings.public.google.redirectUrl,
                loginStyle: Meteor.settings.public.google.loginStyle,
            }, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Success');
                }
            });
        }}
    >
        <i className="google plus icon" />
        Google Auth
    </button>
);

export default GoogleAuthButton;
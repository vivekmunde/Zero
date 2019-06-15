import { Meteor } from 'meteor/meteor';
import React from 'react';

const GoogleAuthButton = () => (
    <button
        className="z-button z-button_google z-button_attached-icon z-button_attached-icon_right"
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
        Google Auth
        <span className="z-button_icon-container">
            <i className="fab fa-google z-button_icon" />
        </span>
    </button>
);

export default GoogleAuthButton;
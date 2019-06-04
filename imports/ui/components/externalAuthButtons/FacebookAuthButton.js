import { Meteor } from 'meteor/meteor';
import React from 'react';

const FacebookAuthButton = () => (
    <button
        className="ui facebook button"
        onClick={() => {
            Meteor.loginWithFacebook({
                requestPermissions: Meteor.settings.public.facebook.requestPermissions,
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
        <i className="facebook icon" />
        Facebook Auth
    </button>
);

export default FacebookAuthButton;
import { Meteor } from 'meteor/meteor';
import React from 'react';

const FacebookAuthButton = ({ className }) => (
    <button
        className={`z-button z-button_facebook z-button_attached-icon z-button_attached-icon_left ${className}`}
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
        <span className="z-button_icon-container">
            <i className="fab fa-facebook-f z-button_icon" />
        </span>
        Facebook
    </button>
);

export default FacebookAuthButton;
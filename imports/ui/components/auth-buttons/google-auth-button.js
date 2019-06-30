import { Meteor } from 'meteor/meteor';
import React from 'react';
import styled from 'styled-components';
import {
    StyledAttachedIconButton,
    StyledLeftAttachedIconContainer
} from '/imports/ui/styled/button/attached-icon-button';

const StyledGoogleAuthButton = styled(StyledAttachedIconButton).attrs(({ theme, styled }) => ({
    styled: {
        bgColor: theme.colors.google,
        color: '#fff',
        ...styled
    },
}))``;

const GoogleAuthButton = ({ styled, style }) => (
    <StyledGoogleAuthButton
        styled={styled}
        style={style}
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
        Google
        <StyledLeftAttachedIconContainer>
            <i className="fab fa-google" />
        </StyledLeftAttachedIconContainer>
    </StyledGoogleAuthButton>
);

export default GoogleAuthButton;
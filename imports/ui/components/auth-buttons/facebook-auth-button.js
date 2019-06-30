import { Meteor } from 'meteor/meteor';
import React from 'react';
import styled from 'styled-components';
import {
    StyledAttachedIconButton,
    StyledLeftAttachedIconContainer
} from '/imports/ui/styled/button/attached-icon-button';

const StyledFacebookAuthButton = styled(StyledAttachedIconButton).attrs(({ theme, styled }) => ({
    styled: {
        bgColor: theme.colors.facebook,
        color: '#fff',
        ...styled
    }
}))``;

const FacebookAuthButton = ({ styled, style }) => (
    <StyledFacebookAuthButton
        styled={styled}
        style={style}
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
        <StyledLeftAttachedIconContainer>
            <i className="fab fa-facebook-f" />
        </StyledLeftAttachedIconContainer>
        Facebook
    </StyledFacebookAuthButton>
);

export default FacebookAuthButton;
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connectState, arrayToMapStateToProps } from 'duxact';
import AppLayout from '/imports/ui/components/app-layout';
import Helmet from '/imports/ui/components/helmet';
import { StyledVerticalAlignedButtons } from '/imports/ui/styled/button/aligned-buttons';
import { StyledTextAlignCenter, StyledFlexAlign, StyledFlexAlignCenter } from '/imports/ui/styled/align';
import { StyledPanel, StyledPanelHeader, StyledPanelBody } from '/imports/ui/styled/panel';
import GoogleAuthButton from '/imports/ui/components/auth-buttons/google-auth-button';
import FacebookAuthButton from '/imports/ui/components/auth-buttons/facebook-auth-button';
import StyledSignupPage from './styled';

const authButtonStyled = {
    size: 'large'
};

const SignUpPage = (props) => {
    const { location, isLoggedIn } = props;

    if (isLoggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    return (
        <StyledSignupPage as={AppLayout}>
            <Helmet>
                <title>Sign up</title>
            </Helmet>
            <StyledFlexAlign>
                <StyledFlexAlignCenter>
                    <StyledPanel
                        as="section"
                        style={{ minWidth: '250px' }}
                    >
                        <StyledPanelHeader>
                            <StyledTextAlignCenter as='h3'>
                                Sign Up
                            </StyledTextAlignCenter>
                        </StyledPanelHeader>
                        <StyledPanelBody>
                            <StyledVerticalAlignedButtons>
                                <GoogleAuthButton styled={authButtonStyled} />
                                <FacebookAuthButton styled={authButtonStyled} />
                            </StyledVerticalAlignedButtons>
                        </StyledPanelBody>
                    </StyledPanel>
                </StyledFlexAlignCenter>
            </StyledFlexAlign>
        </StyledSignupPage>
    );
};

export default connectState(arrayToMapStateToProps(['isLoggedIn']))(withRouter(SignUpPage));
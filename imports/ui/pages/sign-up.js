import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import AppLayout from '/imports/ui/components/app-layout';
import Helmet from '/imports/ui/components/helmet';
import GoogleAuthButton from '/imports/ui/components/auth-buttons/google-auth-button';
import FacebookAuthButton from '/imports/ui/components/auth-buttons/facebook-auth-button';

const SignUpPage = (props) => {
    const { location, isLoggedIn } = props;

    if (isLoggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    return (
        <AppLayout className="z-sign-up-page">
            <Helmet>
                <title>Sign up</title>
            </Helmet>
            <div className="z-flex-align">
                <div className="z-flex-align_center">
                    <section className="z-sign-up_section">
                        <h3 className="z-header z-text_center-aligned z-sign-up_page-header">
                            Sign Up
                        </h3>
                        <div className="z-button-group z-button-group_vertical-buttons">
                            <GoogleAuthButton className="z-button_large" />
                            <FacebookAuthButton className="z-button_large" />
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
};

export default connect(
    ({ isLoggedIn }) => ({ isLoggedIn })
)(withRouter(SignUpPage));
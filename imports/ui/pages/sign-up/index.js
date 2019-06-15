import React from 'react';
import AppLayout from '../../components/app-layout';
import GoogleAuthButton from '../../components/auth-buttons/google-auth-button';
import FacebookAuthButton from '../../components/auth-buttons/facebook-auth-button';
import './index.less';

const SignUpPage = () => (
    <AppLayout className="z-sign-up-page">
        <div className="z-flex-align z-flex-align_center">
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
    </AppLayout>
);

export default SignUpPage;
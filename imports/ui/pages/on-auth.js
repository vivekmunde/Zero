import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

const OnAuthPage = (props) => {
    const { location, isLoggingIn, isLoggedIn } = props;

    if (isLoggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    if (isLoggingIn) {
        return (
            <div className="z-on-auth-page">
                <div className="z-flex-align">
                    <div className="z-flex-align_center">
                        logging in ...
                    </div>
                </div>
            </div>
        );
    }

    return <Redirect to="/sign-up" />;
};

export default connect(
    ({ isLoggingIn, isLoggedIn }) => ({ isLoggingIn, isLoggedIn })
)(withRouter(OnAuthPage));
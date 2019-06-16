import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'

const OnAuthPage = (props) => {
    const { location, loggingIn, loggedIn } = props;

    if (loggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    if (loggingIn) {
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
    ({ loggingIn, loggedIn }) => ({ loggingIn, loggedIn })
)(withRouter(OnAuthPage));
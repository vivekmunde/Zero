import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import { StyledTextAlignCenter } from '/imports/ui/styled/align';
import { StyledOnAuthPage } from './styled';

const OnAuthPage = (props) => {
    const { location, isLoggingIn, isLoggedIn } = props;

    if (isLoggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    if (isLoggingIn) {
        return (
            <StyledOnAuthPage>
                <StyledTextAlignCenter>
                    logging in ...
                </StyledTextAlignCenter>
            </StyledOnAuthPage>
        );
    }

    return <Redirect to="/sign-up" />;
};

export default connect(
    ({ isLoggingIn, isLoggedIn }) => ({ isLoggingIn, isLoggedIn })
)(withRouter(OnAuthPage));
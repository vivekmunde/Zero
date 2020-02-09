import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connectState, arrayToMapStateToProps } from 'duxact';
import { StyledTextAlignCenter } from '/imports/ui/styled/align';
import { StyledOnAuthPage } from './styled';

const OnAuthPage = (props) => {
    const { location, isLoggedIn } = props;

    if (isLoggedIn) {
        const query = new URLSearchParams(location.search);
        return <Redirect to={query.get('redirectUrl') || '/'} />;
    }

    return (
        <StyledOnAuthPage>
            <StyledTextAlignCenter>
                logging in ...
            </StyledTextAlignCenter>
        </StyledOnAuthPage>
    );
};

export default connectState(arrayToMapStateToProps(['isLoggingIn', 'isLoggedIn']))(withRouter(OnAuthPage));
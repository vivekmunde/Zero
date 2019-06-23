import React from 'react';
import UserProfilePageContainer from './user-profile-page-container';
import UserProfilePageLayout from './user-profile-page-layout';

const UserProfilePage = (props) => (
    <UserProfilePageContainer
        {...props}
        render={renderProps => <UserProfilePageLayout {...props} {...renderProps} />}
    />
);

export default UserProfilePage;
import React from 'react';
import Link from '/imports/ui/components/link';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import { StyledLeftIcon } from '/imports/ui/styled/icon';
import { StyledMenuListItem } from './styled';

const UserProfileMenuLink = ({ loggedInUser }) => (
    <StyledMenuListItem
        as={Link}
        to={`/users/${loggedInUser._id}/profile`}
        onClick={toggleUserMenuReduxAction}
    >
        <StyledLeftIcon className="far fa-user" />
        My profile
    </StyledMenuListItem>
);

export default UserProfileMenuLink;
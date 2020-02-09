import React from 'react';
import { connectDispatch, injectDispatch } from 'duxact';
import Link from '/imports/ui/components/link';
import toggleUserMenuDuxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-dux-action';
import { StyledLeftIcon } from '/imports/ui/styled/icon';
import { StyledMenuListItem } from './styled';

const UserProfileMenuItem = ({ loggedInUser, toggleUserMenu }) => (
    <StyledMenuListItem
        as={Link}
        to={`/users/${loggedInUser._id}/profile`}
        onClick={toggleUserMenu}
    >
        <StyledLeftIcon className="far fa-user" />
        My profile
    </StyledMenuListItem>
);

export default connectDispatch(
    injectDispatch({
        toggleUserMenu: toggleUserMenuDuxAction
    })
)(UserProfileMenuItem);
import React from 'react';
import { connectDispatch, injectDispatch } from 'duxact';
import { StyledIcon } from '/imports/ui/styled/icon';
import toggleUserMenuDuxAction from './toggle-user-menu-dux-action';
import { StyledHeaderButton } from '../styled';

const UserMenuToggler = ({ toggleUserMenu }) => (
    <StyledHeaderButton
        onClick={toggleUserMenu}
    >
        <StyledIcon className="far fa-user" />
    </StyledHeaderButton>
);

export default connectDispatch(
    injectDispatch({
        toggleUserMenu: toggleUserMenuDuxAction
    })
)(UserMenuToggler);
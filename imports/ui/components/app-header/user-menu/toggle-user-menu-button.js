import React from 'react';
import { connectDispatch, injectDispatch } from 'duxact';
import toggleUserMenuDuxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-dux-action';
import { StyledIcon } from '/imports/ui/styled/icon';
import { StyledSidebarCloseButton } from './styled';

const ToggleUserMenuButton = ({ toggleUserMenu }) => (
    <StyledSidebarCloseButton
        onClick={toggleUserMenu}
    >
        <StyledIcon className="fa fa-times" />
    </StyledSidebarCloseButton>
);

export default connectDispatch(
    injectDispatch({
        toggleUserMenu: toggleUserMenuDuxAction
    })
)(ToggleUserMenuButton);
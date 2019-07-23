import React from 'react';
import connectDispatch from '/imports/ui/duxact/connect-dispatch';
import injectDispatch from '/imports/ui/duxact/inject-dispatch';
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
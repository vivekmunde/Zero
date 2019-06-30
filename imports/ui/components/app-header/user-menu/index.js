import React from 'react';
import { StyledIcon } from '/imports/ui/styled/icon';
import toggleUserMenuReduxAction from './toggle-user-menu-redux-action';
import { StyledHeaderButton } from '../styled';

const UserMenuToggler = () => (
    <StyledHeaderButton
        onClick={toggleUserMenuReduxAction}
    >
        <StyledIcon className="far fa-user" />
    </StyledHeaderButton>
);

export default UserMenuToggler;
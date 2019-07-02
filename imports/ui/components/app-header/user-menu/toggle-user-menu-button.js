import React from 'react';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import { StyledIcon } from '/imports/ui/styled/icon';
import { StyledSidebarCloseButton } from './styled';

const ToggleUserMenuButton = () => (
    <StyledSidebarCloseButton
        onClick={toggleUserMenuReduxAction}
    >
        <StyledIcon className="fa fa-times" />
    </StyledSidebarCloseButton>
);

export default ToggleUserMenuButton;